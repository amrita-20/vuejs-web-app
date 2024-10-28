<template>
    <div v-for="cartItem in cartItems" class="product-container" :key="cartItem.id">
        <img class="product-image" :src="cartItem.imageName" :alt="cartItem.name" />
        <div class="details-wrap">
            <h3>{{ cartItem.name }}</h3>
            <p>{{ cartItem.price }}</p>
            <p>Quantity: {{ cartItem.quantity }}</p>
        </div>
        <button class="remove-button">Remove from Cart</button>
    </div>
</template>

<script>
export default {
    name: 'ShoppingCartList',
    props: {
        cartItems: {
            type: Array,
            required: true
        }
    }
}
</script>