<!-- DEFINIDO IMAGEM DO TEMPLATE
<componentMenu :logo="require( './assets/logo.png')"/> -->

<template>

  <div class="margintop" >
  <nav class="itensMenu">
    <router-link v-bind:to="logohref">
      <img :src="logosrc" class="logoEsquerda">
    </router-link>

    <label for="menuMobileCheckbox" class="menuMobile" >
      <div class="menu icon"></div>
    </label>
    <input type="checkbox" id="menuMobileCheckbox" value="" class="menuMobileCheckbox">

    <div class="MenuDireita">
      <div v-for="(value, key, index) in menu" :key="index" class="itemMenu">
        <div v-if="!value.menu" @click="desmarcarCheckbox('menuMobileCheckbox')">
          <router-link v-bind:to="'/'+value.link" class="buttonMenu" >{{value.text}}</router-link>
        </div>

        <div v-if="value.menu" class="buttonMenuPlus" @mouseover="marcarCheckbox('menuMobileCheckbox'+key)" @mouseleave="desmarcarCheckboxHover('menuMobileCheckbox'+key)">

          <label :for="'menuMobileCheckbox'+key" class="buttonMenu buttonSubMenu">{{value.text}}<span class="check icon"></span> &nbsp;</label>

          <input type="checkbox" :id="'menuMobileCheckbox'+key" value="" class="menuMobileCheckbox">

          <div class="itensSubmenu">
            <div v-for="(value2, key2, index2) in value.menu" :key="index2" @click="desmarcarCheckbox('menuMobileCheckbox', 'menuMobileCheckbox'+key)" class="itemSubmenu">
              <router-link v-bind:to="'/'+value2.link"  class="buttonMenu">{{value2.text}}</router-link>
            </div>
          </div>

        </div>

    </div>

  </div>
  </nav>
  </div>

</template>

<script>
export default {
  props: {
    logosrc: {
      type: String,
      required: false,
      default: ()=> {  return require('./logo.png'); },
    },
    logohref: {
      type: String,
      required: false,
      default: ()=> {  return '/'; },
    },
    menu: {
      type: [Object, Array],
      required: false,
      default: ()=> {
        return [
          { text:'home', link:'home'},
          { text:'serviços', link:'servicos'},
          { text:'projetos', menu:[
              {text:'Projeto1', link:'projeto1'},
              {text:'Projeto2', link:'projeto2'} ] },
          { text:'páginas', menu:[
              {text:'Facebook', link:'about'},
              {text:'Twitter', link:'twitter'},
              {text:'Stagram', link:'stagram'},
              {text:'Whatsapp', link:'whatsapp'},
              {text:'Github', link:'github'},
              {text:'Gmail', link:'gmail'} ] },
          { text:'contatos', link:'contatos'},
          { text:'ajuda', link:'ajuda'}
        ];
      }
    }

  },
  mounted () { },
  created () {},
  destroyed () {},
  data() { return {} },
  filters:{},
  watch: {},
  computed: {},
  methods: {
    desmarcarCheckbox: function (id, id2) {
        document.getElementById(id).checked = false;
        if (id2) { document.getElementById(id2).checked = false; }
    },
    desmarcarCheckboxHover: function (id, id2) {
      if (window.innerWidth > 720) {
        document.getElementById(id).checked = false;
        if (id2) { document.getElementById(id2).checked = false; }
      }
    },
    marcarCheckbox: function (id) {
      if (window.innerWidth > 720) {
        document.getElementById(id).checked = true;
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import './css.scss';
  @import './icon.css';
</style>
