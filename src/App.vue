<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <MyButton @click="increment" outlined>Click me</MyButton>
    <DerectivesTest />
  </div>
</template>

<script>
import MyButton from "./components/MyButton";
import DerectivesTest from "./components/DerectivesTest";

export default {
  name: "App",
  components: {
    MyButton,
    DerectivesTest,
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
