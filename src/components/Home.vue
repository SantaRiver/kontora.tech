<template>
  <div class="hero-section">
    <div class="hero-blob"></div>
    <div
      class="container hero-container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="hero-label">Веб-студия · Россия</div>
      <h1 class="hero-title">
        Делаем сайты,<br />
        которые <span class="accent">работают.</span>
      </h1>
      <p class="hero-sub">{{ description_short }}</p>
      <div class="hero-actions">
        <a class="btn-primary-cta" href="/portfolio" v-scroll-to="'#portfolio'">Смотреть работы</a>
        <a class="btn-secondary-cta" href="/contact" v-scroll-to="'#contact'">Обсудить проект</a>
      </div>
      <div class="hero-stats">
        <span>5+ лет опыта</span>
        <span class="sep">·</span>
        <span>{{ projectsCount }} {{ projectsLabel }}</span>
        <span class="sep">·</span>
        <span>Полный цикл</span>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";
import { pluralize } from "../utils/pluralize";

export default {
  name: "Home",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      description_short: info.description_short,
      telegram: info.links.telegram,
      github: info.links.github,
      email: info.links.email,
      projectsCount: info.portfolio.length,
    };
  },
  computed: {
    projectsLabel() {
      return pluralize(this.projectsCount, ["проект", "проекта", "проектов"]);
    },
  },
};
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--bg-primary);
  overflow: hidden;
  padding-top: 80px;
}

.hero-container {
  position: relative;
  z-index: 1;
  padding: 80px 15px;
}

.hero-blob {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 92, 0, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  top: 50%;
  right: -100px;
  transform: translateY(-50%);
  pointer-events: none;
  filter: blur(40px);
  animation: blobPulse 6s ease-in-out infinite alternate;
}

@keyframes blobPulse {
  from {
    transform: translateY(-50%) scale(1);
    opacity: 0.8;
  }
  to {
    transform: translateY(-50%) scale(1.15);
    opacity: 1;
  }
}

.hero-label {
  display: inline-block;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 24px;
}

.hero-title {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -2px;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.accent {
  color: var(--accent);
}

.hero-sub {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 480px;
  line-height: 1.7;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.btn-primary-cta {
  background: var(--accent);
  color: #000 !important;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none !important;
  transition: var(--transition);
  font-size: 15px;
}

.btn-primary-cta:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  text-decoration: none !important;
}

.btn-secondary-cta {
  border: 1px solid var(--border);
  color: var(--text-primary) !important;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none !important;
  transition: var(--transition);
  font-size: 15px;
}

.btn-secondary-cta:hover {
  border-color: rgba(255, 255, 255, 0.3);
  text-decoration: none !important;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-secondary);
  font-size: 14px;
  flex-wrap: wrap;
}

.sep {
  opacity: 0.3;
}

@media (max-width: 768px) {
  .hero-blob {
    width: 300px;
    height: 300px;
    right: -50px;
  }

  .hero-container {
    padding: 40px 15px;
  }
}
</style>