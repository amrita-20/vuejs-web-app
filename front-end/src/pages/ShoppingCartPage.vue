<template>
    <div>
        <h1>Shopping Cart</h1>
        <div v-if="cartItems.length === 0">
            <p>Your cart is empty.</p>
        </div>
        <div v-if="cartItems.length > 0">
           <ShoppingCartList :cartItems="cartItems" />
        </div>
    </div>
    <button class="checkout-button">Checkout</button>
</template>

<script>
import { cartItems } from '@/temp-data';
import ShoppingCartList from '@/components/ShoppingCartList.vue';
export default {
    name: 'ShoppingCartPage',
    components: {
        ShoppingCartList
    },
    data() {
        return {
            cartItems
        }
    },
}
</script>