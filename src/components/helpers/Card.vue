<template>
  <div class="my-3 mx-2">
    <div class="pcard smcard">
      <div class="pcard-img-wrap">
        <img
          :src="portfolio.pictures[0].img"
          alt="Card image cap"
        />
        <div class="pcard-overlay">
          <button class="overlay-btn" @click.prevent="showModal">
            <i class="fas fa-expand-alt"></i> подробнее
          </button>
        </div>
      </div>
      <div class="card-body-custom">
        <h3 class="card-title-custom">{{ portfolio.name }}</h3>
        <div class="pb-2 tech-row">
          <span
            class="tech-tag mr-1 mb-1"
            v-for="tech in portfolio.technologies"
            :key="tech"
            >{{ tech }}</span
          >
        </div>
        <p
          class="card-desc"
          v-html="
            portfolio.description.length > 100
              ? portfolio.description.substring(0, 105) + '...'
              : portfolio.description
          "
        ></p>
        <div class="card-actions mt-2">
          <button class="btn-card" @click.prevent="showModal">
            читать далее
          </button>
          <button
            class="btn-card btn-card-visit"
            v-if="portfolio.visit"
            @click.prevent="open(portfolio.visit)"
          >
            <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    portfolio: {
      type: Object,
    },
    nightMode: {
      type: Boolean,
    },
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
    showModal() {
      this.$emit("show", this.portfolio);
    },
  },
};
</script>

<style scoped>
.pcard {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
  height: 460px;
  display: flex;
  flex-direction: column;
}

.pcard:hover {
  border-color: var(--border-accent);
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(255, 92, 0, 0.1);
}

.pcard-img-wrap {
  position: relative;
  overflow: hidden;
  height: 180px;
  flex-shrink: 0;
}

.pcard-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.pcard:hover .pcard-img-wrap img {
  transform: scale(1.05);
}

.pcard-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.pcard:hover .pcard-overlay {
  opacity: 1;
}

.overlay-btn {
  background: var(--accent);
  color: #000;
  border: none;
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.overlay-btn:hover {
  background: var(--accent-hover);
}

.card-body-custom {
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-title-custom {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.tech-row {
  min-height: 50px;
  overflow: hidden;
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

.card-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
  flex: 1;
  overflow: hidden;
  margin-bottom: 0;
}

.card-actions {
  display: flex;
  gap: 8px;
}

.btn-card {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 7px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  flex: 1;
}

.btn-card:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.btn-card-visit {
  flex: 0;
  padding: 7px 12px;
}
</style>