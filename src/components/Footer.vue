<template>
  <footer class="site-footer">
    <span>© 2024 Kontora</span>
    <div class="footer-links">
      <a :href="linkedin" target="_blank" v-tooltip.top="'LinkedIn'">
        <i class="fab fa-linkedin"></i>
      </a>
      <a :href="github" target="_blank" v-tooltip.top="'GitHub'">
        <i class="fab fa-github"></i>
      </a>
      <a :href="angellist" target="_blank" v-tooltip.top="'AngelList'">
        <i class="fab fa-angellist"></i>
      </a>
      <a :href="resume" target="_blank" v-tooltip.top="'Resume'">
        <i class="fa fa-file"></i>
      </a>
    </div>
  </footer>
</template>

<script>
import info from "../../info";

export default {
  name: "Footer",
  data() {
    return {
      linkedin: info.links.linkedin,
      github: info.links.github,
      angellist: info.links.angellist,
      resume: info.links.resume,
    };
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