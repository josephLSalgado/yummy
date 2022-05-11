<script>
import Category from '@/components/Category.vue';

export default {
    name: 'Categories',
    components: {
        Category
    }
}
</script>

<template>
    <div class="categories">
        <!-- Renderizado de una lista -->
        <ul class="categories-list">
            <li v-for="(categories, index) in $store.getters.getCategories" 
            :key="index">
            <Category :category="categories.name" :src_image="categories.image"/>
        </li>
        </ul>
    </div>
</template>

<style scoped>
.categories {
    height: 350px;
    margin: 30px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
}
</style>