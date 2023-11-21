<template>
  <ContainerMain>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="apartment in items"
        :key="apartment.id"
        :id="apartment.id"
        :description="apartment.descr"
        :rating="apartment.rating"
        :price="apartment.price"
        :imgSrc="apartment.imgUrl"
      />
      <!-- @click="handleItemClick"  це ми пишемо на строку вище, тобто вішаємо на <ApartmentsItem> -->
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
  methods: {
    handleItemClick() {
      console.log("item click");
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
