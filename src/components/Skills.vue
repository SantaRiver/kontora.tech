<template>
  <div class="skills-section py-5">
    <div
      class="text-center"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="section-title">навыки.</div>
    </div>

    <div class="marquee-wrapper">
      <div class="marquee-track track-1">
        <span class="skill-tag" v-for="skill in allSkills" :key="'a-' + skill">{{ skill }}</span>
        <span class="skill-tag" v-for="skill in allSkills" :key="'b-' + skill">{{ skill }}</span>
      </div>
      <div class="marquee-track track-2">
        <span class="skill-tag" v-for="skill in allSkillsReversed" :key="'c-' + skill">{{ skill }}</span>
        <span class="skill-tag" v-for="skill in allSkillsReversed" :key="'d-' + skill">{{ skill }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Skills",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      skills: info.skills,
    };
  },
  computed: {
    allSkills() {
      return this.skills.flatMap(s => s.info).filter(Boolean);
    },
    allSkillsReversed() {
      return [...this.allSkills].reverse();
    },
  },
};
</script>

<style scoped>
.skills-section {
  background: var(--bg-primary);
  padding-top: 80px !important;
  padding-bottom: 80px !important;
}

.marquee-wrapper {
  overflow: hidden;
  padding: 24px 0;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-track {
  display: flex;
  gap: 12px;
  width: max-content;
}

.track-1 {
  animation: marquee-left 30s linear infinite;
}

.track-2 {
  animation: marquee-right 38s linear infinite;
  margin-top: 12px;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes marquee-right {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}

.skill-tag {
  padding: 8px 18px;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  white-space: nowrap;
  transition: var(--transition);
  cursor: default;
}

.skill-tag:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>