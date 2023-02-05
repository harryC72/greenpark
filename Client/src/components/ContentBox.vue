<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import Product from "./Product.vue";
import Loader from "./Loader.vue";
import type { IProduct } from "../types/types";
export default defineComponent({
  components: {
    Product,
    Loader,
  },
  props: {
    error: String as PropType<string>,
    products: {
      type: Array as PropType<IProduct[]>,
      required: true,
    },
    changeLinkedState: Function as PropType<(id: number) => void>,
    changeActiveState: Function as PropType<(id: number) => void>,
    changeSelectedColor: Function as PropType<
      (id: number, color: string) => void
    >,
  },
  mounted() {
    console.log("FROM CONTENTBOX", this.products, this.changeSelectedColor);
  },
});
</script>
<template>
  <div class="product-container">
    <div v-if="error && error.length > 3" class="loader-container">
      {{ error }}
    </div>
    <div v-if="products.length === 0 && !error" class="loader-container">
      <Loader />
    </div>
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
