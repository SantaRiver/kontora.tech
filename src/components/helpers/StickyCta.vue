<template>
  <a
    class="sticky-cta"
    href="/contact"
    v-scroll-to="'#contact'"
    @click="trackClick"
  >
    <span>Бесплатная консультация</span>
  </a>
</template>

<script>
import { trackGoal } from "../../utils/analytics";

export default {
  name: "StickyCta",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  methods: {
    trackClick() {
      trackGoal("cta_discuss_project", { location: "sticky" });
    },
  },
};
</script>

<style scoped>
.sticky-cta {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  writing-mode: vertical-rl;
  background: var(--accent);
  color: #000 !important;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.5px;
  padding: 18px 10px;
  border-radius: 10px 0 0 10px;
  text-decoration: none !important;
  transition: var(--transition);
  z-index: 900;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
}

.sticky-cta:hover {
  background: var(--accent-hover);
  padding-right: 14px;
  text-decoration: none !important;
}

@media (max-width: 768px) {
  .sticky-cta {
    display: none;
  }
}
</style>
