<template>
  <div v-if="isVisible">
    <h2>Directives</h2>
    <ul>
      <template v-for="fruit in fruits">
        <li v-if="fruit === 'banana'" :key="fruit">{{ fruit }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DerectivesTest",
  data() {
    return {
      isVisible: true,
      fruits: ["kiwi", "banana", "orange"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
