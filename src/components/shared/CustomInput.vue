<template>
  <div class="wrapper-input">
    <input
      v-bind="$attrs"
      :value="modelValue"
      @blur="blurHandler"
      @input="$emit('update:modelValue', $event.target.value)"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />

    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      isValid: true,
      error: "",
    };
  },
  inject: ["form"],
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },

  watch: {
    modelValue(newValue) {
      this.validate(newValue);
    },
  },
  mounted() {
    if (this.form) this.form.registerInput(this);
  },
  beforeUnmount() {
    if (this.form) this.form.unRegisterInput(this);
  },
  methods: {
    validate(value = this.modelValue) {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(value);
        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }
        return hasPassed;
      });

      return this.isValid;
    },

    reset() {
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.wrapper-input {
  position: relative;
}
.custom-input {
  height: 40px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }
  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
