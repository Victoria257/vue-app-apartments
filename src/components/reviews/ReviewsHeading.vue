<template>
  <div>
    <ReviewsAvatar />
    <div>
      <h2>{{ author }}</h2>
      <Rating :rating="rating" />
    </div>
  </div>
</template>

<script>
import Rating from "../StarRating.vue";
import ReviewsAvatar from "./ReviewsAvatar.vue";

export default {
  name: "ReviewsHeading",
  components: {
    Rating,
    ReviewsAvatar,
  },
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    author: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
