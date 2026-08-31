<template>
  <div class="about-section py-5">
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <div class="section-title">about me.</div>
      </div>

      <div class="stats-row" data-aos="fade-up" data-aos-once="true" data-aos-duration="600">
        <div class="stat-item" v-for="s in stats" :key="s.label">
          <span class="stat-num">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-6 col-md-6 col-sm-12" v-if="education.data.length">
          <Timeline :data="education" :nightMode="nightMode" />
        </div>
        <div
          class="col-sm-12"
          :class="education.data.length ? 'col-xl-6 col-md-6' : 'col-xl-12'"
        >
          <Timeline :data="experience" :nightMode="nightMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "./helpers/Timeline";
import info from "../../info";

export default {
  name: "About",
  components: {
    Timeline,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      education: {
        title: "education",
        data: info.education,
      },
      experience: {
        title: "experiences",
        data: info.experience,
      },
      stats: [
        { value: '5+', label: 'лет опыта' },
        { value: '47', label: 'проектов' },
        { value: '3', label: 'специалиста' },
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
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 64px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  flex: 1;
  min-width: 120px;
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
</style>