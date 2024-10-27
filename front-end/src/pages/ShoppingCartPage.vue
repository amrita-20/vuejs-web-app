<template>
    <div>
        <h1>Shopping Cart</h1>
        <div v-if="cartItems.length === 0">
            <p>Your cart is empty.</p>
        </div>
        <div v-if="cartItems.length > 0">
            <div v-for="cartItem in cartItems" class="product-container" :key="cartItem.id">
                <img class="product-image" :src="cartItem.imageName" :alt="cartItem.name" />
                <div class="details-wrap">
                    <h3>{{ cartItem.name }}</h3>
                    <p>{{ cartItem.price }}</p>
                    <p>Quantity: {{ cartItem.quantity }}</p>
                </div>
                <button class="remove-button">Remove from Cart</button>
            </div>
        </div>
    </div>
    <button class="checkout-button">Checkout</button>
</template>

<script>
import { cartItems } from '@/temp-data';
export default {
    name: 'ShoppingCartPage',
    data() {
        return {
            cartItems
        }
    },
}
</script>