<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <MyButton @click="increment" outlined>Click me</MyButton>

    <StarRating :rating="3"></StarRating>
  </div>
</template>

<script>
import MyButton from "./components/MyButton";

import StarRating from "./components/StarRating";

export default {
  name: "App",
  components: {
    MyButton,

    StarRating,
  },
  data() {
    return {
      amountOfClicks: 0,
    };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`;
    },
  },
  methods: {
    increment() {
      this.amountOfClicks += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
