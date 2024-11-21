<template>
    <div>
        <h1>Shopping Cart</h1>
        <div v-if="cartItems.length === 0">
            <p>Your cart is empty.</p>
        </div>
        <div v-if="cartItems.length > 0">
           <ShoppingCartList :cartItems="cartItems" @remove-from-cart="removeFromCart($event)" />
        </div>
    </div>
    <button class="checkout-button">Checkout</button>
</template>

<script>
import { cartItems } from '@/temp-data';
import ShoppingCartList from '@/components/ShoppingCartList.vue';
import axios from 'axios';
export default {
    name: 'ShoppingCartPage',
    components: {
        ShoppingCartList
    },
    data() {
        return {
            cartItems: []
        }
    },
    methods: {
        async removeFromCart(id) {
            const response = await axios.delete(`/api/users/12345/cart/${id}`)
            this.cartItems = response.data;
        }
    },
    async created() {
        const response = await axios.get('/api/users/12345/cart');
        this.cartItems = response.data;
    }
}
</script>