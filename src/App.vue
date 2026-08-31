<template>
  <div id="app">
    <Navbar @scroll="scrollTo" @nightMode="switchMode" :nightMode="nightMode" />
    <div class="parent">
      <Home :nightMode="nightMode" />
      <About id="about" :nightMode="nightMode" />
      <Team id="team" :nightMode="nightMode" />
      <Skills id="skills" :nightMode="nightMode" />
      <Portfolio id="portfolio" :nightMode="nightMode" />
      <Recommendation :nightMode="nightMode" />
      <Contact id="contact" :nightMode="nightMode" />
      <Footer :nightMode="nightMode" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Recommendation from "./components/Recommendation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import info from "../info";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Team,
    Skills,
    Portfolio,
    Recommendation,
    Contact,
    Footer,
  },
  data() {
    return {
      nightMode: false,
      config: info.config,
    };
  },
  created() {
    if (this.config.use_cookies) {
      this.nightMode = this.$cookie.get("nightMode") === "true" ? true : false;
    }
  },
  mounted() {
    ["about", "team", "contact", "skills", "portfolio"].forEach((l) => {
      if (window.location.href.includes(l)) {
        var elementPosition = document.getElementById(l).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
      }
    });
  },
  methods: {
    switchMode(mode) {
      if (this.config.use_cookies) {
        this.$cookie.set("nightMode", mode);
      }
      this.nightMode = mode;
    },
    scrollTo(ele) {
      if (ele == "home") {
        this.$router.push(`/`);
        window.scrollTo({ top: -80, behavior: "smooth" });
      } else {
        var elementPosition = document.getElementById(ele).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
        if (this.$router.history.current.path !== `/${ele}`)
          this.$router.push(`/${ele}`);
      }
    },
  },
};
</script>

<style>
:root {
  --bg-primary: #0a0a0a;
  --bg-card: #111111;
  --bg-card-hover: #161616;
  --accent: #ff5c00;
  --accent-hover: #ff7a2e;
  --text-primary: #f0f0f0;
  --text-secondary: #888888;
  --border: rgba(255, 255, 255, 0.08);
  --border-accent: rgba(255, 92, 0, 0.35);
  --radius: 14px;
  --transition: all 0.25s ease;
}

body {
  background: var(--bg-primary) !important;
  color: var(--text-primary) !important;
}

* {
  box-sizing: border-box;
}

::selection {
  background: var(--accent);
  color: #000;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-primary);
  width: 100%;
  background: var(--bg-primary);
}

@media screen and (max-width: 580px) {
  #app {
    width: 100%;
  }
}

.parent {
  margin-top: 0;
  padding-top: 0;
  position: relative;
  background: var(--bg-primary);
}

.section-title {
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
  text-transform: lowercase;
  letter-spacing: 3px;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 64px;
}

.section-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: var(--accent);
  margin: 16px auto 0;
  border-radius: 2px;
}

.pgray {
  color: var(--text-secondary);
}

.pblue {
  color: var(--accent);
}

.bg-dark2 {
  background-color: var(--bg-card) !important;
}

.text-light {
  color: var(--text-primary) !important;
}

.p-st {
  transition: var(--transition) !important;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
  border-radius: 9px;
}

::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 9px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: var(--accent);
  color: #000;
  border-radius: 8px;
  font-size: 10px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: var(--accent);
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 10px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s, visibility 0.5s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
