<script>
import Logo from '@/components/Logo.vue';
import Search from '@/components/Search.vue';
import Cart from '@/components/Cart.vue';
import Login from '@/components/Login.vue';
import SocialMedias from '@/components/SocialMedias.vue';
import Copyright from '@/components/Copyright.vue';

export default {
  components: {
    Logo,
    Search,
    Cart,
    Login,
    SocialMedias,
    Copyright
  }
}
</script>

<template>
  <nav class="top">
    <router-link to="/"><Logo/></router-link>
    <Search/>
    <div class="user-data">
      <Cart/>
      <Login/>
    </div>
  </nav>
  <router-view/>
  <nav class="bottom">
    <SocialMedias/>
    <Copyright/>
  </nav>
</template>

<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

body {
  margin: 0;
}

nav {
  width: 100%;
  height: fit-content;
  background: #F1EFEF;
}

.top {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px 70px;
}

.bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.user-data {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

</style>
