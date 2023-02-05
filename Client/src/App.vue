<script lang="ts">
import Container from "./components/Container.vue";
import ContentBox from "./components/ContentBox.vue";
import axios from "axios";
import { toRaw, defineComponent } from "vue";
import type { IProduct } from "./types/types";

export default defineComponent({
  components: {
    Container,
    ContentBox,
  },
  data() {
    return {
      products: [] as IProduct[],
    };
  },
  methods: {
    changeLinkedState(id: number) {
      console.log("ID", id);
      const product = this.products.find(
        (product: IProduct) => product.id === id
      );

      if (!product) {
        console.error("Product not found");
        return;
      }
      console.log("PRODUCT", product);
      product.linked = !product.linked;
    },
    changeActiveState(id: number) {
      console.log("ID", id);
      const product = this.products.find((product) => product.id === id);
      console.log("PRODUCT", product);
      if (product != undefined) product["active"] = !product["active"];
      console.log("PRODUCT", product);
    },
    changeSelectedColor(id: number, color: string) {
      console.log("ID", id);
      const product = this.products.find((product) => product.id === id);

      if (!product) {
        console.error("Product not found");
        return;
      }
      product.selectedColor = color;
      console.log("PRODUCT", product);
    },
  },
  created() {
    console.log(import.meta.env.VITE_PRODUCT_API_DEFAULT);
    axios
      .get(import.meta.env.VITE_PRODUCT_API_DEFAULT as string)
      .then((response) => {
        const rawObject = toRaw(response.data);
        this.products = rawObject;
      })
      .catch((error) => {
        console.error(error);
      });
  },
});
</script>

<template>
  <div class="widget-box">
    <Container>
      <h3>Per product widgets</h3>
      <ContentBox
        :products="products"
        :changeLinkedState="changeLinkedState"
        :changeActiveState="changeActiveState"
        :changeSelectedColor="changeSelectedColor"
      />
    </Container>
  </div>
</template>

<style scoped>
.widget-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 241px;
}

@media only screen and (max-width: 600px) {
  h3 {
    text-align: center;
  }
  .widget-box {
    margin: 48px 0 67px;
  }
}
</style>
