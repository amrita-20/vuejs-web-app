<template>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.imageUrl" :alt="product.name" />
        </div>
        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <h3 class="price">{{ product.price }}</h3>
            <button @click="addToCart" class="add-to-cart" v-if="!isInCart">Add to Cart</button>
            <button @click="addToCart" class="grey-button" v-if="isInCart">Item is already in cart</button>
        </div>
    </div>
    <div v-if="!product">
       <NotFoundPage />
    </div>
</template>

<script>
import NotFoundPage from './NotFoundPage.vue';
import axios from 'axios';
export default {
    name: 'ProductDetailsPage',
    data() {
        return {
            product: null,
            cartItems: []
        }
    },
    computed: {
        isInCart() {
            return this.cartItems.some(item => item.id === this.$route.params.id);
        }
    },
    methods: {
        async addToCart() {
            await axios.post('/api/users/12345/cart', {
                id: this.$route.params.id
            });
            //this.$router.push('/cart');
            alert('Added to cart!');
        }
    },

    components: {
        NotFoundPage
    },
    async created(){
        const response = await axios.get(`/api/products/${this.$route.params.id}`);
        this.product = response.data;

        const cartResponse = await axios.get('/api/users/12345/cart');
        this.cartItems = cartResponse.data;
    }
}
</script>