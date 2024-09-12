<template>
  <div class="list">
    <div class="list__heading">
      <h2 class="list__titl">Сумарний рейтинг</h2>
      <div class="list__rating">
        <span>{{ amountOfReviews }} відгук(-и -ів)</span>
        <Rating :rating="totalRating" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in currentReviews"
      :key="review.author"
      :review="review"
    />
    <button @click="toggleReviews" class="list__button">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import ReviewsItem from "./ReviewsItem.vue";
import Rating from "../StarRating.vue";
export default {
  name: "ReviewsList",
  components: {
    ReviewsItem,
    Rating,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      reviewsLimit: 2,
    };
  },
  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return total / this.reviews.length;
    },
    amountOfReviews() {
      return this.reviews.length;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviewsLimit === this.reviews.length
        ? "Згорнути"
        : "Читати ще...";
    },
  },
  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
        return;
      }
      this.reviewsLimit = this.reviews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  margin-top: 117px;
  background-color: rgb(89, 0, 255);
  &__heading {
    margin-bottom: 17px;
    background-color: #e1efff;
  }
  &__button {
    cursor: pointer;
    width: 100%;
    background-color: #e1efff;
    padding: 10px 21px 14px 20px;
    border: none;

    color: #000;

    text-align: center;
    font-family: Montserrat Medium;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
