<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="custom-input"
  />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.custom-input {
  border: solid 2px $main-color;
}
</style>
