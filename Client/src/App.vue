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
      error: "---",
    };
  },
  methods: {
    changeLinkedState(id: number) {
      const product = this.products.find(
        (product: IProduct) => product.id === id
      );

      if (!product) {
        console.error("Product not found");
        return;
      }
      product.linked = !product.linked;
      axios
        .post(import.meta.env.VITE_PRODUCT_API_DEFAULT as string, product, {
          params: { id: id },
        })
        .catch((err) => {
          console.error(err);
        });
    },
    changeActiveState(id: number) {
      const product = this.products.find((product) => product.id === id);
      if (product != undefined) product["active"] = !product["active"];
      axios
        .post(import.meta.env.VITE_PRODUCT_API_DEFAULT as string, product, {
          params: { id: id },
        })
        .catch((err) => {
          console.error(err);
        });
    },
    changeSelectedColor(id: number, color: string) {
      const product = this.products.find((product) => product.id === id);

      if (!product) {
        console.error("Product not found");
        return;
      }
      product.selectedColor = color;
      axios
        .post(import.meta.env.VITE_PRODUCT_API_DEFAULT as string, product, {
          params: { id: id },
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  created() {
    axios
      .get(import.meta.env.VITE_PRODUCT_API_DEFAULT as string)
      .then((response) => {
        const rawObject = toRaw(response.data);
        this.products = rawObject;
      })
      .catch((error) => {
        this.error = "Something went wrong";
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
        :error="error"
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

h3 {
  padding-bottom: 12px;
  font-size: 30px;
  line-height: 36px;
  color: var(--black);
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
