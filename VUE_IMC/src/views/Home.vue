<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Home msg="Bem vindo ao IMC calcule Adsense !!!"/>
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {
    Home:()=> import('@/components/Home.vue'),
  }
}
</script>
