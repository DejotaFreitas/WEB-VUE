<template>
  <div id="app">
    <componentMenu/>
    <!-- <componentMenu :logosrc="require('./assets/logo.png')" logohref="/about"/> -->
    <router-view/>
  </div>
</template>

<script>
import componentMenu from './components/menu/Menu.vue'
export default {
  name: 'app',
  components: { componentMenu  },
  data () {
    return { }
  }
}
</script>

<style lang="scss">
*, *:before, *:after {
  margin: 0px;
  padding: 0px;
  border: 0px;
  outline: none;
  border-style: none;
  list-style: none;
  text-decoration: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: 'Montserrat';
}
body {
  background-color: #DDD;
}
body::-webkit-scrollbar { width: 0px; }

body { background-color: #1F1F1F; color: #CCC; }

/* barra de roloagem dos componente internos do corpo */
/* ::-webkit-scrollbar { width: 7px; background-color: #EEE; }
::-webkit-scrollbar-button {  height: 0px; }
::-webkit-scrollbar-thumb {  background-color: #AAA; } */


/* espaçamento antes do texto na primeira linha do paragrafo */
/* p { text-indent: 5px; } */

/* se o texto ultrapassar o conteiner aparecer os ... */
/* p { text-overflow: ellipsis; } */
</style>
