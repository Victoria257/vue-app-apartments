<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <MyButton @click="increment" outlined>Click me</MyButton>

    <StarRating :rating="3"></StarRating>
    <ApartmentsList :items="apartments" />
  </div>
</template>

<script>
import MyButton from "./components/MyButton";

import StarRating from "./components/StarRating";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";

export default {
  name: "App",
  components: {
    MyButton,
    StarRating,
    ApartmentsList,
  },
  data() {
    return {
      amountOfClicks: 0,
      apartments,
      apartment: {
        id: 1,
        title: "Розкішні апартаменти",
        description:
          "Розкішні апартаменти у скандинавському стилі з панорамним видом на річку та безкоштовним Wi-Fi.",
        price: 1250,
        rating: 4.6,
        location: {
          city: "Kyiv",
        },
        owner: {
          name: "Viktoria",
          phone: "+380631577013",
          email: "vik25@i.ua",
        },
      },
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
