<template>
  <select v-model="selectedItem" class="custom-select">
    <option v-for="item in formatedItems" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    formatedItems() {
      return this.items.map((item) => {
        return typeof item === "object" ? item : { value: item, label: item };
      });
    },
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  created() {
    if (!this.selectedItem && this.items.length > 0) {
      this.selectedItem = this.items[0].value;
    }
  },
};
</script>

<style lang="scss" scoped>
.custom-select {
  border: solid 2px rgb(57, 57, 158);
  display: inline-block;
  cursor: pointer;
}
</style>
