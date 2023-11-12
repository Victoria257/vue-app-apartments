<template>
  <div class="content">
    <ApartmentFilterForm @submit="filterApartment" class="apartments-filter" />
    <div class="container">
      <p v-if="!filteredApartments.length">Нічого не знайдено</p>
      <ApartmentsList v-else :items="filteredApartments" />
    </div>
  </div>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import apartments from "../components/apartment/apartments";
import ApartmentFilterForm from "../components/apartment/ApartmentFilterForm.vue";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentFilterForm,
  },
  data() {
    return {
      amountOfClicks: 0,
      apartments,
      shouldHandleFilterSubmit: true,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`;
    },
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    increment() {
      this.amountOfClicks += 1;
    },
    filterApartment({ city, price }) {
      if (this.shouldHandleFilterSubmit) {
        this.filters.city = city;
        this.filters.price = price;
        console.log("city", city);
        console.log("price", price);
        console.log("this.filters.city", this.filters.city);
        console.log("this.filters.price", this.filters.price);
        this.shouldHandleFilterSubmit = false;
      }
    },

    filterByCityName(apartments) {
      if (!this.filters.city) {
        console.log(this.filters.city);
        return apartments;
      }
      return apartments.filter((apartment) => {
        console.log(this.filters.city);
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return apartments.filter((apartment) => {
        console.log(this.filters.price);
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style>
.container {
  text-align: center;
}
.content {
  flex-grow: 1;
  padding-top: 120px;
}
.apartments-filter {
  background-color: beige;
}
</style>
