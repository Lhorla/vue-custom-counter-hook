<script>
    
    export default {
      name: 'NavBar',
    }
</script>

<template>
    <nav>
      <div class='nav-logo'>Vue-Counter</div>
      <div class='nav-link'>
        <router-link to="/">Home</router-link>
        <router-link to="/counter">Counter</router-link>
      </div>
    </nav>
</template>

<style>

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;
    color: inherit;
    width: 100%;
    padding: 14px;
    margin: 0 auto;
    box-shadow: 1px 1px 3px #025939;
  }
  
  .nav-logo {
    font-size: 2.4rem;
    font-family: primaryFont;
    font-weight: light;
    letter-spacing: 2px;
    margin-left: 15px;
    color: #04D939;
  }
  
  .nav-link {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
    color: #04D939;
  }
  
  .nav-link a {
    font-size: 1.6rem;
    color: inherit;
    text-decoration: none;
    margin-right: 1rem;
    font-family: primaryFont;
  }
  
</style>