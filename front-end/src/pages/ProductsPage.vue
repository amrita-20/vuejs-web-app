<template>
    <h1>
        Products
    </h1>
        <ProductList :products="products" />
</template>

<script>
import { products } from '@/temp-data';
import ProductList from '@/components/ProductList.vue';

export default {
    name: 'ProductsPage',
    components: {
        ProductList
    },
    data() {
        return {
            products
        }
    },
}
</script>