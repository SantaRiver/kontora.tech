<template>
  <div class="about-section py-5">
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <h2 class="section-title">о нас.</h2>
      </div>

      <div class="stats-row" data-aos="fade-up" data-aos-once="true" data-aos-duration="600">
        <div class="stat-item" v-for="s in stats" :key="s.label">
          <span class="stat-num">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>

      <p class="services-label">услуги</p>
      <div class="row services-row">
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          v-for="(e, idx) in experience"
          :key="e.name"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="600"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
        >
          <div class="service-card">
            <div class="service-name">{{ e.name }}{{ e.place ? ", " + e.place : "" }}</div>
            <div class="service-position">{{ e.position }}</div>
            <p class="service-desc">{{ e.description }}</p>
            <div class="service-skills">
              <span class="skill-badge" v-for="s in e.skills" :key="s">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "About",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      experience: info.experience,
      stats: [
        { value: '5+', label: 'лет опыта' },
        { value: '100%', label: 'в срок' },
      ],
    };
  },
};
</script>

<style scoped>
.about-section {
  background: var(--bg-primary);
  padding-top: 80px !important;
  padding-bottom: 80px !important;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 64px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 40px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  min-width: 160px;
  transition: var(--transition);
}

.stat-item:hover {
  border-color: var(--border-accent);
  transform: translateY(-4px);
}

.stat-num {
  font-size: 52px;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
}

.stat-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 8px;
  text-align: center;
}

.services-label {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 2px;
  text-transform: lowercase;
  margin-bottom: 24px;
}

.services-row {
  margin-bottom: -24px;
}

.service-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 24px;
  height: calc(100% - 24px);
  margin-bottom: 24px;
  transition: var(--transition);
}

.service-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-4px);
}

.service-name {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
}

.service-position {
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  margin-top: 4px;
  margin-bottom: 14px;
}

.service-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 16px;
}

.service-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 11px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 100px;
  transition: var(--transition);
}

.skill-badge:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>