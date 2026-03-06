<template>
  <div class="logo-div">
    <span class="logo-title-name">{{ name }}</span>
    <span class="logo-title-dot">{{ dot }}</span>
  </div>
</template>

<script>
import info from "../../../info";

export default {
  name: "Logo",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      name: info.logo_name,
      dot: ".",
    };
  },
};
</script>

<style scoped>
.logo-div {
  display: flex;
  align-items: baseline;
}

.logo-title-name {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 3px;
  color: var(--text-primary);
  transition: var(--transition);
  text-transform: lowercase;
}

.logo-title-dot {
  font-size: 28px;
  font-weight: 800;
  color: var(--accent);
}

.logo-div:hover .logo-title-name {
  letter-spacing: 4px;
}
</style>