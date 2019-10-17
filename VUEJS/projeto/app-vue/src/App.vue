<template>
  <div id="app">
    <cabecalo/>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2 v-text="msg"></h2>
    <h3>{{ msgReverser }}</h3>
    <h2> <a v-bind:href="linkbind">Home</a> </h2>
    <button type="submit" @click.prevent="hello">Click</button>
    <h3 v-if="!condicao">{{ msg }}</h3>
    <h2 v-if="!condicao">{{ msg }}</h2>
    <ul>
      <li v-for="item in lista">{{ item }}</li>
    </ul>
    <rodape/>
  </div>
</template>


<script>
import cabecalo from './components/header/cabecalho.vue'
import rodape from './components/footer/rodape.vue'
export default {
  name: 'app',
  components: { cabecalo, rodape  },
  mounted () { console.log('INICIA JUNTO COM A APLICAÇÃO!!!'); },
  data () {
    return {
      msg: 'Hello World Vue !!!',
      linkbind: 'home',
      condicao: true,
      lista: ['Goiaba', 'Laranja', 'Abacaxi', 'Melancia']
    }
  },
  computed: {
    msgReverser() {
      return this.msg.split('').reverse().join('');
    }
  },
  methods: {
    hello () {
      alert("Hello World!!!");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
