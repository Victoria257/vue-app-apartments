<template>
  <div class="apartment-item">
    <div class="apartment-item__inner">
      <img :src="imgSrc" alt="" class="apartment-item__photo" />
      <div class="apartment-item__content">
        <p class="apartment-item__description">{{ description }}</p>
        <div class="apartment-item__rating">
          <StarRating :rating="rating" />
        </div>
        <p class="apartment-item__price">UAH {{ price }} за ніч</p>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "../StarRating.vue";
export default {
  name: "ApartmentsItem",
  components: {
    StarRating,
  },
  props: {
    description: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-item {
  width: 350px;
  height: 196px;

  &__inner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  &__photo {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
  }
  &__content {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9;
    background-color: rgba(15, 29, 45, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease;
    height: 100%;
    padding: 20px;

    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  &__description {
    color: #fff;
    font-family: Montserrat Medium;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.7px;
    margin: 0;
    text-align: start;
  }
  &__rating {
    margin: 20px 0 0 0;
  }
  &__price {
    margin: 20px 0 0 0;
    color: #fff;

    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
