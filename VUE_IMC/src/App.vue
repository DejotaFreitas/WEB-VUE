<template>
  <div id="app">
    <MenuDejota v-bind:menu="menu_itens"/>

    <aside class="aside_left">
      <adsense ad-client="ca-pub-5473855996049040" ad-slot="3304607737" ad-style="display: block" ad-format="auto"  data-full-width-responsive="true"></adsense>
    </aside>

    <article class="article"> <router-view/> </article>

    <aside class="aside_right">
      <adsense ad-client="ca-pub-5473855996049040" ad-slot="3726870445" ad-style="display: block" ad-format="auto"  data-full-width-responsive="true"></adsense>
    </aside>


    <footer class="footer">
      <adsense ad-client="ca-pub-5473855996049040" ad-slot="8675944792" ad-style="display: block" ad-format="auto"  data-full-width-responsive="true"></adsense>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    adsense:()=> import('@/components/adsense/adsense.vue'),
    MenuDejota:()=> import('@/components/menu/Menu.vue')
  },
  data () { return {
    menu_itens: [  { text:'Calcule IMC', link:'home'}, { text:'IMC', link:'sobre'} ],
  } }
}
</script>

<style lang="scss">
*, *:before, *:after {
  margin: 0px;  padding: 0px;  border: 0px;  outline: none;  border-style: none;
  list-style: none;  text-decoration: none;  font-family: "Poppins", sans-serif;
  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;
}
body::-webkit-scrollbar { width: 0px; }
body { background-color: #1F1F1F; color: #CCC; }

.aside_left, .article, .aside_right, .footer {
  float: left;  padding: 10px; text-align: center; overflow: hidden;
}

@media (max-width: 960px) {
  .aside_left, .article, .aside_right, .footer {  width: 100%;  }
  .aside_left {  margin-top: 60px; height: 100px; }
}
@media (min-width: 961px) {
  .aside_left, .article, .aside_right {  margin-top: 60px;  }
  .aside_left { width: 30%; min-height: calc(100vh - 100px);  }
  .article { width: 40%; min-height: calc(100vh - 100px); }
  .aside_right { width: 30%; min-height: calc(100vh - 100px); }
  .footer { width: 100%; min-height: 50px; }
}



</style>
