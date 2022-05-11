<script>
export default {
    name: 'SocialMedia',
    props: ['name', 'image']
}
</script>

<template>
    <div class="social-media">
        <img class="logo" :src="image" :alt="name">
    </div>
</template>

<style scoped>
.logo {
    width: 50px;
    height: 50px;
}
</style>