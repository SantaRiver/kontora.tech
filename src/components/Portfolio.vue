<template>
  <div class="portfolio-section py-5">
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <h2 class="section-title">портфолио.</h2>
      </div>

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
      <div class="text-center py-3" v-if="showBtn !== 'скрыть'">
        <button class="btn-show-more" @click.prevent="showMore">{{ showBtn }}</button>
      </div>
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
  </div>
</template>

<script>
import Card from "./helpers/Card";
import Modal from "./helpers/Modal";
import info from "../../info";

export default {
  name: "Portfolio",
  components: {
    Card,
    Modal,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      all_info: info.portfolio,
      portfolio_info: [],
      showModal: false,
      modal_info: {},
      number: 3,
      showBtn: "показать ещё",
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
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio;
      this.showModal = true;
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
        this.showBtn = "скрыть";
      } else if (this.number == this.all_info.length && this.shower == 1) {
        var elementPosition = document.getElementById("portfolio").offsetTop;
        window.scrollTo({ top: elementPosition + 5, behavior: "smooth" });
        this.shower = 0;
        this.number = 3;
        this.showBtn = "показать ещё";
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

</style>