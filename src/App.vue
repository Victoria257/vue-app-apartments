<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <MyButton @click="increment" outlined>Click me</MyButton>

    <StarRating :rating="3"></StarRating>
    <h2>{{ text }}</h2>
    <CustomInput v-model="text" />
    <ApartmentsList :items="apartments" />
  </div>
</template>

<script>
import MyButton from "./components/MyButton";

import StarRating from "./components/StarRating";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import CustomInput from "./components/shared/CustomInput.vue";

export default {
  name: "App",
  components: {
    MyButton,
    StarRating,
    ApartmentsList,
    CustomInput,
  },
  data() {
    return {
      amountOfClicks: 0,
      apartments,
      text: "",
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
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
