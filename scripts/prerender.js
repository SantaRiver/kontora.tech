#!/usr/bin/env node
// Prerenders "/" (the app's only real route — "/about", "/team" etc. are
// pushState paths from scroll navigation, not separate pages) into
// dist/index.html using a real headless Chrome, so crawlers whose JS
// rendering is less reliable than Google's (Yandex, notably) see fully
// rendered content instead of an empty <div id="app">. The JS bundles stay
// referenced in the output, so a real browser still re-renders on load —
// this only changes what ships in the initial HTML response.
//
// Hand-rolled instead of prerender-spa-plugin: that package is unmaintained
// and pulls in its own puppeteer@1.20.0 (2019), which doesn't match any
// Chromium build available now. This is ~70 lines against the puppeteer
// version we actually control (see package.json).

const { spawn } = require("child_process");
const http = require("http");
const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");

const DIST_DIR = path.join(__dirname, "..", "dist");
const PORT = 8991;
const URL = `http://localhost:${PORT}/`;
const TIMEOUT_MS = 25000;

function waitForServer(url, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      http
        .get(url, (res) => {
          res.resume();
          resolve();
        })
        .on("error", () => {
          if (Date.now() > deadline) {
            reject(new Error("static server did not start in time"));
          } else {
            setTimeout(tryOnce, 200);
          }
        });
    };
    tryOnce();
  });
}

async function main() {
  const indexPath = path.join(DIST_DIR, "index.html");
  if (!fs.existsSync(indexPath)) {
    console.error("prerender: dist/index.html not found — run the build first");
    process.exit(1);
  }

  const serveBin = path.join(__dirname, "..", "node_modules", ".bin", "serve");
  const server = spawn(serveBin, ["-s", DIST_DIR, "-l", String(PORT)], {
    stdio: "ignore",
  });

  let browser;
  try {
    await waitForServer(URL, 10000);

    const launchOptions = {
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    };
    if (process.env.PUPPETEER_EXECUTABLE_PATH) {
      launchOptions.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
    }
    browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // main.js dispatches this once Vue has mounted and committed its first
    // render — more reliable than guessing a fixed delay.
    await page.evaluateOnNewDocument(() => {
      window.__PRERENDER_READY__ = false;
      document.addEventListener("render-event", () => {
        window.__PRERENDER_READY__ = true;
      });
    });

    await page.goto(URL, { waitUntil: "networkidle0", timeout: TIMEOUT_MS });
    await page.waitForFunction("window.__PRERENDER_READY__ === true", {
      timeout: TIMEOUT_MS,
    });

    const html = await page.content();
    fs.writeFileSync(indexPath, html);

    const kb = (Buffer.byteLength(html, "utf8") / 1024).toFixed(0);
    console.log(`prerender: wrote dist/index.html (${kb} KB, fully rendered)`);
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch((err) => {
  console.error("prerender failed:", err);
  process.exit(1);
});
