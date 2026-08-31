<template>
  <div class="contact-section py-5">
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <h2 class="section-title">контакты.</h2>
      </div>

      <div class="contact-direct" data-aos="fade-up" data-aos-once="true" data-aos-duration="600">
        <a :href="links.telegram" class="contact-link" target="_blank">
          <i class="fab fa-telegram"></i> Telegram
        </a>
        <a :href="links.email" class="contact-link">
          <i class="fa fa-envelope"></i> santariver@yandex.ru
        </a>
        <a :href="links.phone" class="contact-link">
          <i class="fa fa-phone"></i> +7 917 045-23-01
        </a>
      </div>

      <br />
      <div class="contact-form-wrap">
        <div
          class="form-group-custom"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <input
            type="text"
            name="user_name"
            v-model="name"
            placeholder="имя"
            class="form-control-custom"
            style="transition-delay: 0.2s"
          />
        </div>

        <div
          class="form-group-custom"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <input
            type="email"
            name="user_email"
            v-model="email"
            placeholder="почта"
            class="form-control-custom"
            style="transition-delay: 0.4s"
          />
        </div>

        <div
          class="form-group-custom"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <textarea
            name="message"
            v-model="text"
            placeholder="сообщение"
            class="form-control-custom"
            rows="4"
            style="transition-delay: 0.6s"
          ></textarea>
        </div>

        <button
          @click.prevent="sendEmail"
          class="btn-submit"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-offset="50"
        >
          Отправить
        </button>
      </div>

      <Snackbar
        :showSnackbar="showSnackbar"
        @close="closeSnackbar"
        :snackbarMessage="snackbarMessage"
        :snackbarColor="snackbarColor"
      />
    </div>
  </div>
</template>

<script>
import config from "../../config";
import emailjs from "emailjs-com";

import Snackbar from "./helpers/Snackbar";
import info from "../../info";

export default {
  name: "Contact",
  components: {
    Snackbar,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      email: "",
      name: "",
      text: "",
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
      links: info.links,
    };
  },
  methods: {
    closeSnackbar(val) {
      if (!val) {
        setTimeout(() => {
          this.showSnackbar = val;
        }, 1000);
      }
    },
    sendEmail() {
      if (!this.email || !this.name || !this.text) {
        this.showSnackbar = true;
        this.snackbarMessage = "Заполните все поля";
        this.snackbarColor = "var(--accent)";
      } else {
        var obj = {
          user_email: this.email,
          from_name: this.name,
          message_html: this.text,
          to_name: "Kontora",
        };

        emailjs
          .send(
            config.emailjs.serviceID,
            config.emailjs.templateID,
            obj,
            config.emailjs.userID
          )
          .then(
            (result) => {
              this.showSnackbar = true;
              this.snackbarMessage = "Спасибо! Сообщение получено.";
              this.snackbarColor = "#1aa260";

              this.email = "";
              this.text = "";
              this.name = "";
            },
            (error) => {
              this.showSnackbar = true;
              this.snackbarMessage = "Упс! Что-то пошло не так.";
              this.snackbarColor = "var(--accent)";
            }
          );
      }
    },
  },
};
</script>

<style scoped>
.contact-section {
  background: var(--bg-primary);
  padding-top: 80px !important;
  padding-bottom: 80px !important;
}

.contact-direct {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.contact-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 8px;
}

.contact-link:hover {
  color: var(--accent);
  text-decoration: none;
}

.contact-form-wrap {
  max-width: 540px;
  margin: 0 auto;
}

.form-group-custom {
  margin-bottom: 16px;
}

.form-control-custom {
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-primary);
  padding: 14px 18px;
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  transition: var(--transition);
  outline: none;
  resize: vertical;
}

.form-control-custom:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(255, 92, 0, 0.15);
}

.form-control-custom::placeholder {
  color: var(--text-secondary);
}

.btn-submit {
  width: 100%;
  background: var(--accent);
  color: #000;
  font-weight: 700;
  padding: 14px 36px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  margin-top: 8px;
}

.btn-submit:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}
</style>