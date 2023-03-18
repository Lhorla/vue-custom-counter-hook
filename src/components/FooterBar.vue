<script>
    export default {
        name: 'FooterBar',
        
    }
</script>


<template>
    <div class='footer'>
        <small>Developed by <a href='https://www.github.com/lhorla'>Lhorla</a></small>
    </div>
</template>

<style>
    .footer{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        padding: 10px;
        font-family: primaryFont;
        font-size: 1.2rem;
        background-color: inherit;
        color: inherit;
        box-shadow: 1px 1px 3px #025939;
    }

    .footer a{
        color: inherit;
        text-decoration: none;
    }

    .footer a:hover{
        color: #04D939;
        transition: all 0.4s;
    }

</style>

