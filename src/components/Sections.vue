<script>
import Section from '@/components/Section.vue';

export default {
    name: 'Sections',
    components: {
        Section
    }
}
</script>

<template>
    <div class="sections">
        <Section section="Categorías" url="#/categorias"/>
        <Section section="Restaurantes" url="#/proximamente"/>
    </div>
</template>

<style scoped>
.sections {
    height: 375px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
}
</style>