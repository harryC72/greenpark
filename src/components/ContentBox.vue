<script lang="ts">
import	{ defineComponent } from 'vue';
import Product from './Product.vue';
export default {
	components: {
		Product
	},
	props: ["products"],
	mounted() {
		console.log("FROM CONTENTBOX", this.products)
	},

}
</script>
<template>
<div v-for="product in products" :key="product.id">
	<Product :action="product.action" :active="product.active" :amount="product.amount" :id="product.id" :linked="product.linked" :selectedColor="product.selectedColor" :type="product.type" />
	</div>
</template>
<style scoped></style>