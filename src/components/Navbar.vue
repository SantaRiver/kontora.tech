<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top p-st navbar-dark-custom">
      <div class="container">
        <a
          class="navbar-brand"
          href="/"
          @click.prevent="$emit('scroll', 'home')"
        >
          <Logo :nightMode="nightMode" />
        </a>
        <button
          class="navbar-toggler-custom"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span><i class="fas fa-bars"></i></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto align-items-center">
            <li class="nav-item mx-2">
              <a
                class="nav-link-custom"
                href="/about"
                @click.prevent="$emit('scroll', 'about')"
                >about</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link-custom"
                href="/team"
                @click.prevent="$emit('scroll', 'team')"
                >команда</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link-custom"
                href="/skills"
                @click.prevent="$emit('scroll', 'skills')"
                >skills</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link-custom"
                href="/portfolio"
                @click.prevent="$emit('scroll', 'portfolio')"
                >portfolio</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link-custom"
                href="/contact"
                @click.prevent="$emit('scroll', 'contact')"
                >contact</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link-custom mode-btn"
                href="#"
                @click.prevent="switchMode"
                v-tooltip.bottom="nightMode ? 'Light Mode' : 'Night Mode'"
              >
                <i :class="{ 'fas fa-moon': nightMode, 'far fa-moon': !nightMode }"></i>
              </a>
            </li>
            <li class="nav-item ml-3">
              <a class="btn-cta-nav" href="/contact" @click.prevent="$emit('scroll', 'contact')">Обсудить проект</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "./helpers/Logo";
import info from "../../info";

export default {
  name: "Navbar",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      navbarConfig: info.config.navbar,
      localNightMode: this.nightMode,
    };
  },
  components: {
    Logo,
  },
  methods: {
    switchMode() {
      this.localNightMode = !this.localNightMode;
      this.$emit("nightMode", this.localNightMode);
    },
  },
};
</script>

<style scoped>
.navbar-dark-custom {
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav-link-custom {
  font-weight: 500;
  font-size: 14px;
  color: var(--text-secondary) !important;
  text-decoration: none;
  transition: var(--transition);
  padding: 6px 4px;
}

.nav-link-custom:hover {
  color: var(--text-primary) !important;
  text-decoration: none;
}

.mode-btn {
  font-size: 16px;
}

.navbar-toggler-custom {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
}

.navbar-toggler-custom:hover {
  border-color: var(--text-secondary);
  color: var(--text-primary);
}

.btn-cta-nav {
  border: 1px solid var(--accent);
  color: var(--accent) !important;
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  transition: var(--transition);
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
}

.btn-cta-nav:hover {
  background: var(--accent);
  color: #000 !important;
  text-decoration: none;
}
</style>