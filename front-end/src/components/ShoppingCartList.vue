<template>
    <div v-for="cartItem in cartItems" class="product-container" :key="cartItem.id">
        <img class="product-image" :src="cartItem.imageUrl" :alt="cartItem.name" />
        <div class="details-wrap">
            <h3>{{ cartItem.name }}</h3>
            <p>{{ cartItem.price }}</p>
            <p>Quantity: {{ cartItem.quantity }}</p>
        </div>
        <button class="remove-button">Remove from Cart</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ShoppingCartList',
    data() {
        return {
            cartItems: []
        }
    },
    async created() {
        const response = await axios.get('/api/users/12345/cart');
        this.cartItems = response.data;
    }
}
</script>