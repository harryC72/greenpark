<script lang="ts">
import { defineComponent } from "vue";
import Product from "./Product.vue";
import Loader from "./Loader.vue";
export default {
  components: {
    Product,
    Loader,
  },
  props: [
    "products",
    "changeLinkedState",
    "changeActiveState",
    "changeSelectedColor",
  ],
  mounted() {
    console.log("FROM CONTENTBOX", this.products, this.changeSelectedColor);
  },
};
</script>
<template>
  <div class="product-container">
    <div v-if="products.length === 0" class="loader-container"><Loader /></div>
    <div v-for="product in products" :key="product.id">
      <Product
        :changeLinkedState="changeLinkedState"
        :changeActiveState="changeActiveState"
        :changeSelectedColor="changeSelectedColor"
        :action="product.action"
        :active="product.active"
        :amount="product.amount"
        :id="product.id"
        :linked="product.linked"
        :selectedColor="product.selectedColor"
        :type="product.type"
      />
    </div>
  </div>
</template>
<style scoped>
.product-container {
  border-top: 2px solid var(--border);
  display: flex;
  justify-content: space-between;
}
.loader-container {
  width: 100%;
  margin-top: 48px;
  margin-bottom: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .product-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
