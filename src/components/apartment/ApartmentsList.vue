<template>
  <ContainerMain>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="apartment in items"
        :key="apartment.id"
        :description="apartment.descr"
        :rating="apartment.rating"
        :price="apartment.price"
        :imgSrc="apartment.imgUrl"
      />
    </div>
  </ContainerMain>
</template>

<script>
import ApartmentsItem from "./ApartmentsItem.vue";
import ContainerMain from "../shared/ContainerMain.vue";
export default {
  name: "ApartmentsList",
  components: {
    ApartmentsItem,
    ContainerMain,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
