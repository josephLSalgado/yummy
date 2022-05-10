<script>
export default {
    name: 'Cart'
}
</script>

<template>
    <div class="cart">
        <button class="cart">
            <div class="image"></div>
        </button>
    </div>
</template>

<style scoped>
.cart {
    margin: 10px 0;
    width: 52px;
    height: 52px;
    background: #FF5900;
    border-radius: 10px;
    border-color: #000000;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image {
    width: 35px;
    height: 35px;
    background-image: url('@/assets/carrito-de-compras.png');
    background-size: cover;
}
</style>