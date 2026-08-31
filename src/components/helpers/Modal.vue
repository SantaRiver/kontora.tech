<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="title1 px-4 pt-3">
            <span
              ><a
                href="#"
                @click.prevent="open(portfolio.visit)"
                >{{ portfolio.name }}</a
              ></span
            >
            <a
              class="pull-right"
              style="font-size: 18px;"
              @click="$emit('close')"
              ><i class="fas fa-times"></i
            ></a>
            <hr class="my-1" />
          </div>
          <div class="modal-body my-0 pb-0 px-4 pt-0">
            <div class="mb-2 date">
              <span>{{ portfolio.date }} • {{ portfolio.category }}</span>
            </div>
            <div class="pb-1 bheight">
              <span
                class="tech-tag mr-2 mb-2"
                v-for="tech in portfolio.technologies"
                :key="tech"
                >{{ tech }}</span
              >
            </div>

            <div style="text-align: justify;">
              <span v-html="portfolio.description"></span>
            </div>
            <hr />
            <div>
              <Gallery :images="portfolio.pictures" />
            </div>
          </div>

          <div class="text-center pb-3">
            <hr class="mt-1 mb-3" />
            <button
              class="btn-card mr-3"
              v-if="portfolio.github"
              @click="open(portfolio.github)"
            >
              github
            </button>
            <button
              class="btn-card"
              v-if="portfolio.visit"
              @click="open(portfolio.visit)"
            >
              открыть сайт
            </button>
            <button class="btn-card" @click="$emit('close')">закрыть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from "./Gallery";

export default {
  name: "Modal",
  components: {
    Gallery,
  },
  props: {
    showModal: {
      type: Boolean,
    },
    portfolio: {
      type: Object,
    },
    nightMode: {
      type: Boolean,
    },
  },
  created() {
    document.getElementsByTagName("body")[0].classList.add("modal-open");
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
body.modal-open {
  overflow: hidden;
}

a {
  text-decoration: none;
  color: var(--text-primary);
  transition: var(--transition);
  cursor: pointer;
}

a:hover {
  color: var(--accent);
}

.date {
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary);
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 40%;
  max-height: 70%;
  margin: 0px auto;
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  flex-direction: column;
  display: flex; /*added*/
}

.modal-container hr {
  border-color: var(--border);
}

@media screen and (max-width: 1600px) {
  .modal-container {
    width: 60%;
  }
}

@media screen and (max-width: 1200px) {
  .modal-container {
    width: 80%;
  }
}

@media screen and (max-width: 580px) {
  .modal-container {
    width: 90%;
  }
}

.modal-body {
  margin: 20px 0;
  overflow-y: scroll;
  max-height: inherit;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
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

.btn-card {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 7px 18px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.btn-card:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>
