<template>
  <footer class="site-footer">
    <span>© {{ year }} Kontora</span>
    <div class="footer-links">
      <a :href="telegram" target="_blank" v-tooltip.top="'Telegram'" @click="trackClick('telegram')">
        <i class="fab fa-telegram"></i>
      </a>
      <a :href="github" target="_blank" v-tooltip.top="'GitHub'" @click="trackClick('github')">
        <i class="fab fa-github"></i>
      </a>
      <a :href="email" v-tooltip.top="'Email'" @click="trackClick('email')">
        <i class="fa fa-envelope"></i>
      </a>
    </div>
  </footer>
</template>

<script>
import info from "../../info";
import { trackGoal } from "../utils/analytics";

export default {
  name: "Footer",
  data() {
    return {
      telegram: info.links.telegram,
      github: info.links.github,
      email: info.links.email,
      year: new Date().getFullYear(),
    };
  },
  methods: {
    trackClick(channel) {
      trackGoal("contact_link_click", { channel, location: "footer" });
    },
  },
};
</script>

<style scoped>
.site-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  border-top: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 13px;
  background: var(--bg-primary);
  flex-wrap: wrap;
  gap: 12px;
}

.footer-links a {
  color: var(--text-secondary);
  transition: var(--transition);
  margin-left: 16px;
  font-size: 18px;
  text-decoration: none;
}

.footer-links a:hover {
  color: var(--accent);
}
</style>