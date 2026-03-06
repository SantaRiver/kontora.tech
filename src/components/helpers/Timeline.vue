<template>
  <div>
    <div class="mx-1 mt-3 mb-5">
      <div class="row">
        <div class="col-12">
          <p
            class="timeline-section-title"
            data-aos="fade"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="1000"
          >
            {{ data.title }}
          </p>
          <ul
            class="timeline m-0 pt-1"
            v-for="(e, idx) in data.data"
            :key="e.name"
            :style="{ 'transition-delay': idx / 4.2 + 's' }"
            data-aos="fade-up"
            data-offset="10"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="500"
          >
            <li class="m-0 pb-2">
              <div class="timeline-card">
                <div class="timeline-name">{{ e.name }}, {{ e.place }}</div>
                <div class="timeline-role">
                  {{ e.degree || e.position }}
                  {{ e.gpa ? "(" + e.gpa + ")" : "" }}
                </div>
                <div class="timeline-date">{{ e.date }}</div>
                <div class="timeline-desc pb-2 pt-2">
                  {{ e.description }}
                </div>
                <span
                  class="skill-badge mx-1 mb-2"
                  v-for="s in e.skills"
                  :key="s"
                  >{{ s }}</span
                >
                <p class="m-2"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  props: {
    data: {
      type: Object,
    },
    nightMode: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.timeline-section-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 2px;
  text-transform: lowercase;
  margin-bottom: 16px;
}

.timeline-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.timeline-role {
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
  margin-top: 2px;
}

.timeline-date {
  font-size: 12px;
  font-weight: 400;
  color: var(--text-secondary);
  margin-top: 2px;
}

.timeline-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  text-align: left;
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

.timeline-card {
  padding: 4px 8px;
}

ul.timeline {
  list-style-type: none;
  position: relative;
  padding-left: 0;
}

ul.timeline:before {
  content: " ";
  background: var(--border);
  display: inline-block;
  position: absolute;
  left: 9px;
  width: 2px;
  height: 93%;
  margin-top: 20px;
  z-index: 400;
}

ul.timeline > li {
  margin: 20px 0;
  padding-left: 36px;
}

ul.timeline > li:before {
  content: " ";
  background: var(--accent);
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255, 92, 0, 0.4);
  left: 0px;
  width: 20px;
  height: 20px;
  z-index: 400;
  margin-top: 2px;
}
</style>