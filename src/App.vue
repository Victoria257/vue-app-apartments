<template>
  <div id="app">
    <HeaderMain></HeaderMain>
    <router-view></router-view>
    <FooterMain />
  </div>
</template>

<script>
import FooterMain from "./components/Footer.vue";
import HeaderMain from "./components/Header.vue";

export default {
  name: "App",
  components: {
    FooterMain,
    HeaderMain,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
