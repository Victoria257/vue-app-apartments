<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <MyButton @click="increment" outlined>Click me</MyButton>

    <StarRating :rating="3"></StarRating>
    <h2>{{ text }}</h2>
    <CustomInput v-model="text" />
    <CustomSelect :items="formattedItems" />
    <ApartmentsList :items="apartments" />
  </div>
</template>

<script>
import MyButton from "./components/MyButton";

import StarRating from "./components/StarRating";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import CustomInput from "./components/shared/CustomInput.vue";
import CustomSelect from "./components/shared/CustomSelect.vue";

export default {
  name: "App",
  components: {
    MyButton,
    StarRating,
    ApartmentsList,
    CustomInput,
    CustomSelect,
  },
  data() {
    return {
      amountOfClicks: 0,
      apartments,
      text: "",
      items: [
        { value: "1", label: "name" },
        { value: "2", label: "label" },
        { value: "3", label: "salary" },
      ],
      selectedItem: "1",
    };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`;
    },
    formattedItems() {
      return this.items;
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
