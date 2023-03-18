<script>
  import NavBar from './components/NavBar.vue'
  import HomePage from './components/HomePage.vue'
  import FooterBar from './components/FooterBar.vue'
  

  export default {
    name: 'App',
    components: {
      NavBar,
      HomePage,
      FooterBar,
    },
  }
</script>

<template>
  <div class="wrapper">
    <NavBar />
    <HomePage />
  
    <FooterBar />
  </div>
</template>

<style>
  .app{
    width: 100vw;
    max-width: 100%;
    height: 100vh;
  }
</style>
