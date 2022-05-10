<script>
export default {
    name: 'Search'
}
</script>

<template>
    <div class="search">
        <input type="text" class="search-text" id="search-text">
        <button class="search-button">
            <div class="image"></div>
        </button>
    </div>
</template>

<style scoped>
.search {
    display: flex;
    align-items: center;
    gap: 25px;
}

.search-text {
    margin: 10px 0;
    width: 500px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 15px;
    border: 3px;
    border-color: #FF5900;
    border-style: solid;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 39px;
}

.search-button {
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
    width: 38px;
    height: 38px;
    background-image: url('@/assets/lupa.png');
    background-size: cover;
}

/* Responsive layout */
@media (max-width: 700px) {
    .search-text {
        width: 300px;
    }
}
</style>