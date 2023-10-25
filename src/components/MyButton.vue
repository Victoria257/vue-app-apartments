<template>
  <button v-bind:type="type" :class="{ btn: true, 'btn--outlined': outlined }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background: red;
  &--outlined {
    background: green;
  }
}
</style>
