<template>
  <header class="header">
    <router-link to="/">
      <LogoMain />
    </router-link>
  </header>
</template>

<script>
import LogoMain from "./Logo.vue";
export default {
  name: "HeaderMain",
  components: {
    LogoMain,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 128px;
  height: 60px;
  background-color: $secondary-color;
}
</style>
