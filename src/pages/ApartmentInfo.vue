<template>
  <main class="content">
    <ApartmentMainInfo :apartment="apartment" />

    <div>
      <ApartmentOwner :owner="apartment.owner" />
      <ReviewsList :reviews="reviews" />
    </div>
  </main>
</template>

<script>
import apartments from "../components/apartment/apartments";
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

  computed: {
    reviews() {
      return reviews;
    },
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
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
