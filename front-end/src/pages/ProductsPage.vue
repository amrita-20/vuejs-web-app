<template>
    <h1>
        Products
    </h1>
        <ul class="grid-wrap">
            <li v-for="product in products" class="product-item" :key="product.id">
                <img :src="product.imageName" :alt="product.name" />
                <h3 class="product-name">{{ product.name }}</h3>
                <p class="product-price">{{ product.price }}</p>
                <button>View Details</button>
            </li>
        </ul>
</template>

<script>
import { products } from '@/temp-data';
export default {
    name: 'ProductsPage',
    data() {
        return {
            products
        }
    },
}
</script>