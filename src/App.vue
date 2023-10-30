<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <MyButton @click="increment" outlined>Click me</MyButton>

    <StarRating :rating="3"></StarRating>
    <ApartmentsItem
      :description="apartment.description"
      :price="apartment.price"
      :rating="apartment.rating"
      imgSrc="https://vn.com.ua/Media/files/filemanager/2019/October/%D0%90%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D1%8B.jpg"
    />
  </div>
</template>

<script>
import MyButton from "./components/MyButton";

import StarRating from "./components/StarRating";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";

export default {
  name: "App",
  components: {
    MyButton,
    StarRating,
    ApartmentsItem,
  },
  data() {
    return {
      amountOfClicks: 0,
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
