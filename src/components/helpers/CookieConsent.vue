<template>
  <transition name="consent-slide">
    <div class="consent-bar" v-if="visible">
      <p class="consent-text">
        Используем cookie и Яндекс.Метрику — в том числе Вебвизор, который
        записывает действия на сайте (клики, скролл, движения мыши), — чтобы
        понимать, как вам удобнее, и делать сайт лучше.
        <a href="/privacy.html" target="_blank" rel="noopener" class="consent-link">Подробнее</a>
      </p>
      <div class="consent-actions">
        <button class="consent-accept" @click="accept">Принять</button>
        <button class="consent-close" @click="dismiss" aria-label="Закрыть">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  hasAnalyticsConsent,
  isConsentBannerDismissed,
  dismissConsentBanner,
  grantAnalyticsConsent,
} from "../../utils/analytics";

export default {
  name: "CookieConsent",
  data() {
    return {
      visible: !hasAnalyticsConsent() && !isConsentBannerDismissed(),
    };
  },
  methods: {
    accept() {
      grantAnalyticsConsent();
      this.visible = false;
    },
    dismiss() {
      dismissConsentBanner();
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.consent-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  padding: 18px 28px;
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.35);
}

.consent-text {
  margin: 0;
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.6;
  max-width: 720px;
}

.consent-link {
  color: var(--accent);
  text-decoration: underline;
  white-space: nowrap;
}

.consent-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.consent-accept {
  background: var(--accent);
  color: #000;
  font-weight: 700;
  font-size: 13px;
  border: none;
  padding: 10px 22px;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
}

.consent-accept:hover {
  background: var(--accent-hover);
}

.consent-close {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
}

.consent-close:hover {
  border-color: var(--text-secondary);
  color: var(--text-primary);
}

.consent-slide-enter-active,
.consent-slide-leave-active {
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.consent-slide-enter,
.consent-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 600px) {
  .consent-bar {
    justify-content: flex-start;
    padding: 16px 18px;
  }
}
</style>
