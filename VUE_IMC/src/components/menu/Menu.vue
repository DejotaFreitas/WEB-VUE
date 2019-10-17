<!-- <MenuDejota :logosrc="require('./assets/logo.png')" logohref="/about"/> -->

<template>
  <div class="margin_top" >
    <nav class="barra_menu">
      <router-link v-bind:to="logohref" class="logo_menu">
        <img :src="logosrc" class="logo_img">
      </router-link>
      <div class="botao_menu_mobile" @click="toggle_menu">  <div class="menu_icon"></div> </div>
      <ul class="itens_menu" v-bind:class="{ itens_menu_show: menu_show }">
        <li v-for="(value, key, index) in menu" :key="index" class="item_menu">
          <span v-if="!value.submenu" @click="toggle_submenu">
            <router-link   v-bind:to="'/'+value.link" class="botao_menu">{{value.text}}</router-link>
          </span>
          <span v-if="value.submenu" class="botao_menu item_menu_plus" @click="toggle_submenu_menu">
            {{value.text}} <span class="check_icon"></span> &nbsp;
          </span>
          <ul v-if="value.submenu" class="itens_submenu" @click="toggle_submenu" v-bind:class="{ itens_submenu_hidden: hoverHidden }">
            <li v-for="(value2, key2, index2) in value.submenu" :key="index2" class="item_submenu">
                <span><router-link v-bind:to="'/'+value2.link" class="botao_menu">{{value2.text}}</router-link></span>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() { return {
    menu_show: false,
    touchStartpageX: 0,
    touchStartpageY: 0,
    touchMovepageX: 0,
    touchMovepageY: 0,
    hoverHidden: false
  } },
  props: {
    logosrc: {  type: String,  required: false,  default: ()=> {  return require('@/assets/logo.png'); },  },
    logohref: {  type: String,  required: false,  default: ()=> {  return '/'; },  },
    menu: {  type: [Object, Array],  required: false,
      default: ()=> {  return [
        { text:'home', link:'home'},
        { text:'serviços', link:'servicos'},
        { text:'projetos', submenu: [
            {text:'Projeto1', link:'projeto1'},
            {text:'Projeto2', link:'projeto2'} ]  },
        { text:'páginas', submenu: [
            {text:'Facebook', link:'about'},
            {text:'Twitter', link:'twitter'},
            {text:'Stagram', link:'stagram'},
            {text:'Whatsapp', link:'whatsapp'},
            {text:'Github', link:'github'},
            {text:'Gmail', link:'gmail'} ]  },
        { text:'contatos', link:'contatos'},
        { text:'ajuda', link:'ajuda'}
      ]; }
    }

  },
  beforeCreate: function() {},
  created: function() {
    window.addEventListener('touchstart', this.touchStart);
    window.addEventListener('touchmove', this.touchMove);
    window.addEventListener('touchend', this.touchEnd);
  },
  // beforeMount: function() {},
  // mounted: function() {},
  // beforeUpdate: function() {},
  // updated: function() {},
  // activated: function() {},
  // deactivated: function() {},
  // beforeDestroy: function() {},
  destroyed: function() {
    window.removeEventListener('touchstart', this.touchStart);
    window.removeEventListener('touchmove', this.touchMove);
    window.removeEventListener('touchend', this.touchEnd);
  },
  // errorCaptured: function() {},
  // computed: {},
  methods: {
    isMobile: function () {
      if (window.innerWidth <= 960)
        return true;
      return false;
    },
    toggle_menu: function() {
      if (this.menu_show)
        this.menu_show = false;
      else
        this.menu_show = true;
    },
    toggle_submenu_menu: function(e) {
      if (this.isMobile())
        e.currentTarget.nextElementSibling.classList.toggle("itens_submenu_show");
    },
    toggle_submenu: function() {
      if (this.isMobile()) {
        this.toggle_menu();
      } else {
        this.hoverHidden = true;
        setTimeout(() => {  this.hoverHidden = false; }, 500);
      }
    },
    touchStart: function(e) {
      var touch = e.touches[0];
      this.touchStartpageX = touch.pageX;
      this.touchStartpageY = touch.pageY;
    },
    touchMove: function(e) {
      var touch = e.touches[0];
      this.touchMovepageX = touch.pageX;
      this.touchMovepageY = touch.pageY;
    },
    touchEnd: function() {
      if (this.touchMovepageX != undefined && this.touchMovepageY != undefined) {
        var rangeTouch = 100;
        var rangeDireita = this.touchMovepageX - this.touchStartpageX;
        var rangeEsquerda = this.touchStartpageX - this.touchMovepageX;
        var rangeCima = this.touchStartpageY - this.touchMovepageY;
        var rangeBaixo = this.touchMovepageY - this.touchStartpageY;
        var moveHorizontal = (rangeDireita > rangeCima && rangeDireita > rangeBaixo) ||
                            (rangeEsquerda > rangeCima && rangeEsquerda > rangeBaixo);
        if (moveHorizontal) {
          if (rangeDireita > rangeTouch && this.touchMovepageX > this.touchStartpageX) {
            this.menu_show = true;
          } else if (rangeEsquerda > rangeTouch && this.touchMovepageX < this.touchStartpageX) {
            this.menu_show = false;
          }
        }
        this.touchStartpageX = undefined;
        this.touchMovepageX = undefined;
        this.touchStartpageY = undefined;
        this.touchMovepageY = undefined;
      }
    }
  },
  // filters:{},
  // watch: {}
}
</script>

<style scoped lang="scss">
  @import './css.scss';
  @import './icon.css';
</style>
