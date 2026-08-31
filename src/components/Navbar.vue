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
                >о нас</a
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
                >навыки</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link-custom"
                href="/portfolio"
                @click.prevent="$emit('scroll', 'portfolio')"
                >портфолио</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link-custom"
                href="/contact"
                @click.prevent="$emit('scroll', 'contact')"
                >контакты</a
              >
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
    };
  },
  components: {
    Logo,
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

/* Bootstrap's own .navbar-toggler is display:none at lg+; since this
   button uses a custom class (for styling), restore that behavior
   explicitly — otherwise it stays visible even on desktop. */
@media (min-width: 992px) {
  .navbar-toggler-custom {
    display: none;
  }
}

/* Below lg, the collapse is hidden and .navbar > .container's
   space-between pushes the toggler to the far right, away from the
   brand. Keep it anchored next to the logo instead. */
@media (max-width: 991.98px) {
  .navbar > .container {
    justify-content: flex-start;
  }

  .navbar-toggler-custom {
    margin-left: 16px;
  }
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