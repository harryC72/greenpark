<script>
import Container from "./components/Container.vue";
import ContentBox from "./components/ContentBox.vue";
import axios from "axios";
import { isProxy, toRaw } from "vue";

export default {
  components: {
    Container,
    ContentBox,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    changeLinkedState(id) {
      console.log("ID", id);
      const product = this.products.find((product) => product.id === id);
      console.log("PRODUCT", product);
      product.linked = !product.linked;
      console.log("PRODUCT", product);
    },
    changeActiveState(id) {
      console.log("ID", id);
      const product = this.products.find((product) => product.id === id);
      console.log("PRODUCT", product);
      product.active = !product.active;
      console.log("PRODUCT", product);
    },
    changeSelectedColor(id, color) {
      console.log("ID", id);
      const product = this.products.find((product) => product.id === id);
      console.log("PRODUCT", product);
      product.selectedColor = color;
      console.log("PRODUCT", product);
    },
  },
  created() {
    console.log(import.meta.env.VITE_PRODUCT_API_DEFAULT);
    axios
      .get(import.meta.env.VITE_PRODUCT_API_DEFAULT)
      .then((response) => {
        // this.products = response.data;
        const rawObject = toRaw(response.data);
        console.log("RAW", rawObject);

        this.products = rawObject;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
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
