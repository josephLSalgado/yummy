<script>
export default {
    name: 'Section',
    props: ['section', 'url']
}
</script>

<template>
    <!-- Llama la función cuando se entra al div y le enviamos la variable 
        section -->
    <div class="section" @click="$store.dispatch('textToSpeech', section)">
        <a :href="url"><h1>{{ section }}</h1></a>
    </div>
</template>


<style scoped>
.section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 80px;
    background: #A5B452;
    border-radius: 20px;
}

a {
    text-decoration: none;
    color: black;
}

h1 {
    margin: 0;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 58px;
}
</style>