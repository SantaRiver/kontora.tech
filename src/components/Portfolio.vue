<template>
  <div class="portfolio-section py-5">
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <div class="section-title">portfolio.</div>
      </div>

      <vue-tabs :activeTextColor="'#ff5c00'">
        <v-tab title="development">
          <br />
          <div class="row">
            <div
              class="col-xl-4 col-md-6 col-sm-12"
              v-for="(portfolio, idx) in portfolio_info"
              :key="portfolio.name"
            >
              <Card
                :style="{ 'transition-delay': (idx % 3) / 4.2 + 's' }"
                :portfolio="portfolio"
                @show="showModalFn"
                data-aos="fade-up"
                :nightMode="nightMode"
                data-aos-offset="100"
                data-aos-delay="10"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              />
            </div>
          </div>
          <div class="text-center py-3" v-if="showBtn !== 'show less'">
            <button class="btn-show-more" @click.prevent="showMore">{{ showBtn }}</button>
          </div>
        </v-tab>

        <v-tab title="design">
          <div class="row">
            <div
              v-for="(design, idx) in desgin_info"
              :key="idx"
              class="col-xl-6 col-md-12 col-sm-12 mt-4"
              style="position: relative;"
            >
              <div class="design-slide-wrap">
                <vueper-slides
                  :dragging-distance="50"
                  fixed-height="300px"
                  :bullets="false"
                  slide-content-outside="bottom"
                  @click.prevent="showDesignModalFn(design)"
                >
                  <vueper-slide
                    v-for="(slide, i) in design.pictures"
                    :key="i"
                    :image="slide.img"
                  />
                </vueper-slides>
              </div>
              <div class="design-meta mt-2">
                <div>
                  <div class="design-title">{{ design.title }}</div>
                  <span
                    class="tech-tag mr-2 mb-2"
                    v-for="tech in design.technologies"
                    :key="tech"
                    >{{ tech }}</span
                  >
                  <span class="design-date ml-1">· {{ design.date }}</span>
                </div>
                <button
                  class="btn-card"
                  @click.prevent="showDesignModalFn(design)"
                >
                  read more
                </button>
              </div>
            </div>
          </div>
          <br />
        </v-tab>
      </vue-tabs>
    </div>

    <transition name="modal">
      <Modal
        :showModal="showModal"
        @close="closeModal"
        v-if="showModal"
        :portfolio="modal_info"
        :nightMode="nightMode"
      />
    </transition>
    <transition name="modal">
      <DesignModal
        :showModal="showDesignModal"
        @close="closeModal"
        v-if="showDesignModal"
        :portfolio="design_modal_info"
        :nightMode="nightMode"
      />
    </transition>
  </div>
</template>

<script>
import Card from "./helpers/Card";
import Modal from "./helpers/Modal";
import DesignModal from "./helpers/DesignModal";
import info from "../../info";

import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Portfolio",
  components: {
    Card,
    Modal,
    VueTabs,
    VTab,
    VueperSlides,
    VueperSlide,
    DesignModal,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      all_info: info.portfolio,
      desgin_info: info.portfolio_design,
      portfolio_info: [],
      showModal: false,
      showDesignModal: false,
      modal_info: {},
      design_modal_info: {},
      number: 3,
      showBtn: "show more",
      shower: 0,
    };
  },
  created() {
    for (var i = 0; i < this.number; i++) {
      this.portfolio_info.push(this.all_info[i]);
    }
  },
  watch: {
    number() {
      this.portfolio_info = [];
      for (var i = 0; i < this.number; i++) {
        this.portfolio_info.push(this.all_info[i]);
      }
    },
  },
  methods: {
    closeModal() {
      this.showModal = false;
      this.showDesignModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio;
      this.showModal = true;
    },
    showDesignModalFn(design_portfolio) {
      this.design_modal_info = design_portfolio;
      this.showDesignModal = true;
    },
    showMore() {
      if (this.number != this.all_info.length) {
        this.number += 3;

        window.scrollBy({
          top: document.getElementsByClassName("smcard")[0].clientHeight,
          behavior: "smooth",
        });

        if (this.number > this.all_info.length)
          this.number = this.all_info.length;
      }

      if (this.number == this.all_info.length && this.shower == 0) {
        this.shower = 1;
        this.showBtn = "show less";
      } else if (this.number == this.all_info.length && this.shower == 1) {
        var elementPosition = document.getElementById("portfolio").offsetTop;
        window.scrollTo({ top: elementPosition + 5, behavior: "smooth" });
        this.shower = 0;
        this.number = 3;
        this.showBtn = "show more";
      }
    },
  },
};
</script>

<style scoped>
.portfolio-section {
  background: var(--bg-primary);
  padding-top: 80px !important;
  padding-bottom: 80px !important;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

.btn-show-more {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 10px 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.btn-show-more:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/deep/ .vue-tabs .nav-tabs {
  border: none;
  border-bottom: 1px solid var(--border);
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

/deep/ .vue-tabs .tabs__link {
  color: var(--text-secondary) !important;
}

/deep/ .vue-tabs .nav-tabs > li.active > a {
  background: transparent;
  border: none;
  color: var(--text-primary) !important;
  transition: var(--transition);
  padding-right: 0;
  padding-left: 0;
  margin-right: 15px;
  margin-left: 15px;
}

/deep/ .vue-tabs .nav-tabs > li > a:hover {
  background: transparent;
  color: var(--text-primary) !important;
  transition: var(--transition);
}

/deep/ .vue-tabs .nav-tabs > li > a {
  background: transparent;
  border: none;
  transition: var(--transition);
}

/deep/ .vue-tabs .nav-tabs > li > a:after {
  content: "";
  width: 20%;
  position: absolute;
  bottom: 3px;
  border-width: 0 0 2px;
  border-style: solid;
  border-color: var(--accent);
  transition: var(--transition);
}

/deep/ .vue-tabs .nav-tabs > li.active > a:after {
  width: 100%;
}

/deep/ .vueperslide {
  border-radius: var(--radius) !important;
}

/deep/ .vueperslides__parallax-wrapper {
  border-radius: var(--radius) !important;
}

/deep/ .vueperslides__arrow {
  outline: none !important;
  border: none;
  color: var(--text-secondary);
}

.design-slide-wrap {
  cursor: pointer;
}

.design-meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.design-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
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

.design-date {
  font-size: 13px;
  color: var(--text-secondary);
  opacity: 0.75;
}

.btn-card {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 4px;
}

.btn-card:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>