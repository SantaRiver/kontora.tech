// Yandex.Metrika, gated behind cookie consent (see helpers/CookieConsent.vue).
// Nothing here fires — not even the counter script itself — until the
// visitor has accepted. Every tracking call below no-ops safely if that
// hasn't happened yet (window.ym won't exist).

export const YANDEX_METRIKA_ID = 112114909;

const CONSENT_KEY = "kontora_analytics_consent";
const DISMISS_KEY = "kontora_consent_dismissed";

function safeGet(storage, key) {
  try {
    return storage.getItem(key);
  } catch (e) {
    return null;
  }
}

function safeSet(storage, key, value) {
  try {
    storage.setItem(key, value);
  } catch (e) {
    // storage unavailable (private mode, disabled cookies, etc) — ignore
  }
}

export function hasAnalyticsConsent() {
  return safeGet(window.localStorage, CONSENT_KEY) === "1";
}

export function isConsentBannerDismissed() {
  return safeGet(window.sessionStorage, DISMISS_KEY) === "1";
}

export function dismissConsentBanner() {
  safeSet(window.sessionStorage, DISMISS_KEY, "1");
}

let metrikaLoaded = false;

export function loadYandexMetrika() {
  if (metrikaLoaded) return;
  metrikaLoaded = true;

  /* eslint-disable */
  (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
  })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=' + YANDEX_METRIKA_ID, 'ym');
  /* eslint-enable */

  window.ym(YANDEX_METRIKA_ID, "init", {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: "dataLayer",
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: true,
  });
}

export function grantAnalyticsConsent() {
  safeSet(window.localStorage, CONSENT_KEY, "1");
  loadYandexMetrika();
}

// Called from router.afterEach — this is a single-route SPA, so every
// section "page" is a pushState from scroll navigation, not a real load.
export function trackHit(url) {
  if (typeof window.ym === "function") {
    window.ym(YANDEX_METRIKA_ID, "hit", url || window.location.href);
  }
}

// Custom goals — see CLAUDE.md for the full list and dashboard setup steps.
export function trackGoal(goal, params) {
  if (typeof window.ym === "function") {
    window.ym(YANDEX_METRIKA_ID, "reachGoal", goal, params);
  }
}
