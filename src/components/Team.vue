<template>
  <div class="team-section py-5">
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <h2 class="section-title">команда</h2>
      </div>

      <div class="row justify-content-center">
        <div
          class="col-xl-4 col-md-6 col-sm-12"
          v-for="(m, idx) in team"
          :key="m.name"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="600"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
        >
          <div class="team-card">
            <div class="team-photo-wrap">
              <img :src="m.photo" :alt="m.name" class="team-photo" />
            </div>
            <div class="team-body">
              <h3 class="team-name">{{ m.name }}</h3>
              <div class="team-role">{{ m.role }}</div>
              <div class="team-meta">
                <span class="meta-badge">{{ m.experience }}</span>
              </div>
              <p class="team-education">{{ m.education }}</p>
              <div class="stack-row">
                <span
                  class="tech-tag mr-1 mb-1"
                  v-for="tech in m.stack"
                  :key="tech"
                  >{{ tech }}</span
                >
              </div>
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
  name: "Team",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      team: info.team,
    };
  },
};
</script>

<style scoped>
.team-section {
  background: var(--bg-primary);
  padding-top: 80px !important;
  padding-bottom: 80px !important;
}

.team-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: var(--transition);
  margin-bottom: 32px;
  height: 100%;
}

.team-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(255, 92, 0, 0.1);
}

.team-photo-wrap {
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

.team-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: var(--transition);
}

.team-card:hover .team-photo {
  transform: scale(1.04);
}

.team-body {
  padding: 20px 22px 24px;
}

.team-name {
  font-size: 19px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.team-role {
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 10px;
}

.team-meta {
  margin-bottom: 10px;
}

.meta-badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 100px;
  background: rgba(255, 92, 0, 0.08);
  border: 1px solid var(--border-accent);
  color: var(--accent);
}

.team-education {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 14px;
}

.stack-row {
  display: flex;
  flex-wrap: wrap;
}

.tech-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  border: 1px solid var(--border);
}
</style>
