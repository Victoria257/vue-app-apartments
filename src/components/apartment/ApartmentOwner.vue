<template>
  <section class="owner">
    <h1 class="owner__title">Інформація про власника</h1>
    <p class="owner__name">{{ owner.name }}</p>
    <p class="owner__phone">tel: {{ owner.phone }}</p>
    <p class="owner__email">email: {{ owner.email }}</p>

    <!-- <p v-if="owner" class="owner__name">{{ owner.name || "N/A" }}</p>
    <p v-if="owner" class="owner__phone">tel: {{ owner.phone || "N/A" }}</p>
    <p v-if="owner" class="owner__email">email: {{ owner.email || "N/A" }}</p>
    <p v-else class="owner__name">Інформація про власника не доступна</p> -->
  </section>
</template>

<script>
export default {
  name: "ApartmentOwner",
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.owner {
  background-color: #e1efff;
  padding: 19px 20px;
  max-height: 152px;
}
</style>
