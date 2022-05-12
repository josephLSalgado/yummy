<script>
export default {
    name: 'Item',
    props: ['name', 'src_image', 'price'],
}
const text = 'Agregar';
</script>

<template>
    <div class="item">
        <div class="container-image" @click="$store.dispatch('speechDetails', {name, price})">
            <div class="image">
                <img :src="src_image" :alt="name">
            </div>
        </div>
        <div class="container-description">
            <div class="description">
                <span class="name">{{ name }}</span>
            </div>
            <div class="cart">
                <span class="price">{{ price }}</span>
                <button class="add" @click="$store.dispatch('speechAdd', name)">+</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.container-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 250px;
    background: #C8D96F;
    border: 3px solid #C8D96F;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.image {
    width: 303px;
    height: 203px;
    background: #FFFFFF;
    border-radius: 20px;
}

img {
    width: 100%;
    height: 100%;
}

.container-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 400px;
    height: 250px;
    border: 3px solid #C8D96F;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.description {
    text-align: left;
    margin-top: 15px;
}

.name {
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
    padding-left: 10px;
}

.cart {
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.price {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 44px;
    padding-left: 10px;
}

.add {
    margin-right: 10px;
    width: 52px;
    height: 52px;
    background: #FF5900;
    border-radius: 15px;
    border-color: #000000;
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;
    color: #FFFFFF;
}
</style>