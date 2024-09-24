<template>
  <FormBase ref="loginForm" @submit.prevent="handleSubmit">
    <CustomInput name="email" v-model="formData.email" :rules="emailRules" />
    <CustomInput
      name="password"
      v-model="formData.password"
      :rules="passwordRules"
    />
    <MyButton type="submit">Click me</MyButton>
  </FormBase>
</template>

<script>
import FormBase from "../shared/form";
import CustomInput from "../shared/CustomInput.vue";
import MyButton from "../MyButton.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "@/utils/validationRules";

export default {
  name: "LoginForm",
  components: {
    FormBase,
    CustomInput,
    MyButton,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return { emailValidation, passwordValidation, isRequired };
    },

    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
  },
  methods: {
    handleSubmit() {
      const isFormValidations = this.$refs.loginForm.validate();
      if (isFormValidations) {
        console.log("this.formData", this.formData);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
