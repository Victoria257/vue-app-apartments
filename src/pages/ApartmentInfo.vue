<template>
  <div class="content">
    <h2>Apartment info</h2>
  </div>
</template>

<script>
export default {
  name: "ApartmentInfo",
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
