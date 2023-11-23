<template>
  <article class="apartment-info">
    <div>
      <h1 class="apartment-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartment-info__photo" />
    <p class="apartment-info__description">{{ apartment.descr }}</p>
  </article>
</template>

<script>
import StarRating from "../../components/StarRating";
export default {
  name: "ApartmentMainInfo",
  components: {
    StarRating,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
