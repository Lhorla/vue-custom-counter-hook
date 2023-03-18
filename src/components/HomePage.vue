<script>
  export default {
    name: 'HomePage',
  }
</script>

<template>
  <main class='counter'>
    <div class="counter-head">
      <h1>Vue Counter App</h1>
    </div>

    <div class='counter-btn'>
      <button class='btn'><router-link to="/counter">Counter</router-link></button>
    </div>
  </main>
</template>


<style>
  .counter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: calc(100vh - 80px);
    width: 98%;
    margin: 0 auto;
    animation: fadeIn 1.5s ease-in-out;
  }

  .counter-head h1 {
    font-size: 54px;
    margin-bottom: 16px;
    text-align: center;
    font-family: primaryFont;
    font-weight: bolder;
  }
  
  .counter-head p {
    font-family: primaryFont;
    font-size: 18px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  
  .counter-btn .btn{
    width: 150px;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 10px;
    margin: 10px;
    background-color: #04D939;
    color: #fff;
  }

  .btn a {
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    font-family: primaryFont;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>