<script>
import Item from '@/components/Item.vue';

export default {
    name: 'Items',
    components: {
        Item
    }
}
</script>

<template>
    <div class="items">
        <ul>
            <li v-for="(item, index) in $store.getters.getFastFood"
                :key="index">
                <Item :name="item.name" :src_image="item.image"
                    :price="item.price"/>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.items {
    margin: 30px 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
}
</style>