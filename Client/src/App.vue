<script>
import Container from './components/Container.vue';
import ContentBox from './components/ContentBox.vue';
import axios from "axios";
import { isProxy, toRaw } from 'vue';


export default {
	components: {
		Container,
		ContentBox
	},
	data(){
		return {
			products: []
		}
	},
	created() {
		console.log(import.meta.env.VITE_PRODUCT_API_DEFAULT);
    axios
      .get(import.meta.env.VITE_PRODUCT_API_DEFAULT)
      .then(response => {
        // this.products = response.data;
								const rawObject = toRaw(response.data);
								console.log("RAW", rawObject);

								this.products = rawObject;

      })
      .catch(error => {
        console.error(error);
      });
  }
}


</script>

<template>
	<div class="widget-box">
	<Container>
		<h3>Per product widgets</h3>
		<ContentBox	:products="products" />
	</Container>
</div>
</template>

<style scoped>
.widget-box{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 241px;
}
/* @media (min-width: 1024px) {
} */
</style>
