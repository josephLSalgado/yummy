<script>
import SocialMedia from '@/components/SocialMedia.vue';

export default {
    name: 'SocialMedias',
    components: {
        SocialMedia
    }
}
</script>

<template>
    <div class="social-medias">
        <!-- Renderizado de una lista -->
        <ul class="social-medias-list">
            <li v-for="(social, index) in $store.getters.getSocial"
                :key="index">
                <SocialMedia :name="social.name" :image="social.image"/>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.social-medias {
    margin: 25px 0;
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