<template>
  <form v-bind="$attrs" action="" class="form">
    <slot> </slot>
  </form>
</template>

<script>
export default {
  name: "FormBase",
  provide() {
    return {
      form: this,
    };
  },
  data() {
    return {
      inputs: [],
    };
  },
  methods: {
    registerInput(input) {
      this.inputs.push(input);
    },
    unRegisterInput(input) {
      this.inputs.filter((item) => item !== input);
    },
    validate() {
      return this.inputs.reduce((isValid, input) => {
        const isInputValidate = input.validate();
        return isValid && isInputValidate;
      }, true);
    },

    reset() {
      return this.inputs.forEach((input) => input.reset());
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables.scss";
.form {
  display: flex;
  gap: 20px;
  padding: 100px 20px;
}
</style>
