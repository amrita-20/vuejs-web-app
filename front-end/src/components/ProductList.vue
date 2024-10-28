<template>
    <ul class="grid-wrap">
            <li v-for="product in products" class="product-item" :key="product.id">
                <img :src="product.imageName" :alt="product.name" />
                <h3 class="product-name">{{ product.name }}</h3>
                <p class="product-price">{{ product.price }}</p>
                <router-link :to="'/products/' + product.id">
                    <button>View Details</button>
                </router-link>
            </li>
        </ul>
</template>

<script>
export default {
    name: 'ProductList',
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>