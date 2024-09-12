<template>
  <main class="content">
    <div v-if="apartment">
      <ApartmentMainInfo :apartment="apartment" />

      <div>
        <ApartmentOwner :owner="apartment.owner" />
        <ReviewsList :reviews="reviews" />
      </div>
    </div>
  </main>
</template>

<script>
import { getApartmentsList } from "@/services/apartments.service";
import ApartmentMainInfo from "../components/apartment/ApartmentMainInfo.vue";
import ApartmentOwner from "@/components/apartment/ApartmentOwner.vue";
import ReviewsList from "../components/reviews/ReviewsList.vue";
import reviews from "../components/reviews/reviews.json";
export default {
  name: "ApartmentInfo",
  components: {
    ApartmentMainInfo,
    ApartmentOwner,
    ReviewsList,
  },
  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviews() {
      return reviews;
    },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      // const { data } = await getApartmentById(id);
      // this.apartment = data;
      // console.log("data", data);
      const response = await getApartmentsList();
      const apartments = response.data;
      this.apartment = apartments.find((apartment) => apartment.id === id);

      console.log("Apartment data:", this.apartment);
    } catch (error) {
      console.error(error);
    }
  },
  mounted() {
    // цей хук спрацьовує при монтажі компонента
    console.log(this.apartment);
  },
};
</script>

<style lang="scss" scoped>
.content {
  flex-grow: 1;
  display: flex;
  gap: 30px;
  padding: 120px 128px;
}
</style>
