<template>
  <div>
    <ReviewsHeading :rating="review.rating" :author="review.author" />
    <p>{{ review.content }}</p>
  </div>
</template>

<script>
import ReviewsHeading from "./ReviewsHeading.vue";
export default {
  name: "ReviewsItem",
  components: {
    ReviewsHeading,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
