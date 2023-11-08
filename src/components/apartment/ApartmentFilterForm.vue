<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="city" class="custom-select" />
    <CustomInput placeholder="Ціна, від" v-model="price" class="form__input" />
    <SubmitButton class="form__submit" type="submit">
      Підбір житла
    </SubmitButton>
  </form>
</template>

<script>
import CustomSelect from "../shared/CustomSelect.vue";
import CustomInput from "../shared/CustomInput.vue";
import SubmitButton from "../MyButton.vue";

export default {
  name: "ApartmentFilterForm",
  components: {
    CustomInput,
    CustomSelect,
    SubmitButton,
  },
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    cities() {
      return [
        { label: "Місто", value: "", selected: true },
        "Kyiv",
        "Odessa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Chernihiv",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  margin-bottom: 40px;
  &__select {
    margin-right: 10px;
  }
  &__input {
    margin-right: 30px;
  }
}
.custom-select {
  border: solid 2px green;
  display: inline-block;
  cursor: pointer;
}
</style>
