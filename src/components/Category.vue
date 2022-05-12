<script>
export default {
    name: 'Category',
    props: ['category', 'src_image', 'url']
}
</script>

<template>
    <!-- Llama la función cuando se entra al div y le enviamos la variable 
        category -->
    <div class="category" @click="$store.dispatch('textToSpeech', category)">
        <a :href="url">
            <div class="container-image">
                <div class="image">
                    <img :src="src_image" :alt="category">
                </div>
            </div>
            <div class="container-text">
                <h2>{{ category }}</h2>
            </div>
        </a>
    </div>
</template>

<style scoped>
.category {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    height: fit-content;
}

a {
    text-decoration: none;
    color: black;
}

.container-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    background: #C8D96F;
    border-radius: 20px;
}

.image {
    width: 200px;
    height: 200px;
    background: #FFFFFF;
    border-radius: 20px;
}

img {
    width: 100%;
    height: 100%;
}

h2 {
    margin: 0;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
}
</style>