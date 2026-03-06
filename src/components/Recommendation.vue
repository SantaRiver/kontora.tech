<template>
  <div class="rec-section py-5">
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <div class="section-title">recommendations.</div>
      </div>
      <div class="row">
        <div
          class="col-xl-6 col-md-6 col-sm-12 py-3 px-3"
          v-for="d in data"
          :key="d.author"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-duration="500"
        >
          <div class="rec-card">
            <div class="rec-quote">&ldquo;</div>
            <div class="rec-text">"{{ d.title }}"</div>
            <div class="rec-author">{{ d.author }}</div>
            <div class="rec-role">{{ d.position }}, {{ d.company }}, {{ d.location }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Recommendation",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      data: info.recommendations,
    };
  },
};
</script>

<style scoped>
.rec-section {
  background: var(--bg-primary);
  padding-top: 80px !important;
  padding-bottom: 80px !important;
}

.rec-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  position: relative;
  transition: var(--transition);
  height: 100%;
}

.rec-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-4px);
}

.rec-quote {
  font-size: 80px;
  line-height: 0.8;
  color: var(--accent);
  opacity: 0.4;
  display: block;
  margin-bottom: 12px;
  font-family: Georgia, serif;
  font-style: normal;
}

.rec-text {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.75;
  font-style: italic;
  margin-bottom: 20px;
}

.rec-author {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 14px;
  margin-top: 20px;
}

.rec-role {
  color: var(--text-secondary);
  font-size: 13px;
  margin-top: 4px;
}
</style>