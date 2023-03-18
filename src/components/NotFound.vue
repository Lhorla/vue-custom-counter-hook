<script>
    export default {
        name: 'NotFound',
    }
</script>

<template>
    <div class="not-found">
        <h1>404</h1>
        <h2>Page not found</h2>
        <router-link to="/">Go back home</router-link>
    </div>
</template>

<style scoped>
    .not-found {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    
    .image_wrapper{
        width: 200px;
        height: 200px;
    }

    .image_wrapper img{
        width: 100%;
    }
  
    .heading-main{
        font-size: 48px;
        margin-bottom: 16px;
        text-align: center;
        font-family: primaryFont;
        font-weight: bolder;
    }
    .error__msg{
        font-family: terFont;
        font-size: 16px;
        text-align: center;
    }

</style>