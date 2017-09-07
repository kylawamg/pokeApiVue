<template>
  <div id="app">
      <h1 class="title">{{ title }}</h1>
      <div class="container">
        <pokemon v-for="(name, index) in pokemonsName" :pokemonName="name" :index="index" :pokemonsId="pokemonsId">

        </pokemon>
        <pagination @next="nextPage" @previous="previousPage">
        </pagination>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Pokemon from '@/components/Pokemon'
import Pagination from '@/components/Pagination'
export default {
  name: 'app',
  components: {
    Pokemon,
    Pagination
  },
  data () {
    return {
      title: 'PokeApi with vue.js',
      pokemonsName: [],
      pokemons: {},
      pokemonsId: ['1', '2', '3', '4', '5', '6', '7', '8'],
      offset: 0
    }
  },
  created: function () {
    this.searchPokemon('charmander')
  },
  methods: {
    searchPokemon () {
      return window.fetch(`${Vue.config.pokeapi.ENDPOINT}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.pokemons = json
        for (var i = 0; i < this.pokemons.results.length; i++) {
          this.pokemonsName.push(this.pokemons.results[i].name)
        }
      })
    },
    previousPage () {
      this.pokemonsName = []
      this.offset = this.offset - 8
      console.log(this.pokemonsId)
      for (var i = 0; i < this.pokemonsId.length; i++) {
        this.pokemonsId[i] = parseInt(this.pokemonsId[i]) - 8
        this.pokemonsId[i].toString()
      }
      console.log(this.pokemonsId)
      return window.fetch(`http://pokeapi.co/api/v2/pokemon/?limit=8&offset=${this.offset}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.pokemons = json
        for (var i = 0; i < this.pokemons.results.length; i++) {
          this.pokemonsName.push(this.pokemons.results[i].name)
        }
      })
    },
    nextPage () {
      this.pokemonsName = []
      this.offset = this.offset + 8
      console.log(this.pokemonsName)
      for (var i = 0; i < this.pokemonsId.length; i++) {
        this.pokemonsId[i] = parseInt(this.pokemonsId[i]) + 8
        this.pokemonsId[i].toString()
      }
      console.log(this.pokemonsId)
      return window.fetch(`http://pokeapi.co/api/v2/pokemon/?limit=8&offset=${this.offset}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.pokemons = json
        for (var i = 0; i < this.pokemons.results.length; i++) {
          this.pokemonsName.push(this.pokemons.results[i].name)
        }
      })
    }
  }
}
</script>

<style>
body{
  background: linear-gradient(
  to bottom right,
  #2C3E50, #FD746C,
  #FF8235, #ffff1c,
  #92FE9D, #00C9FF,
  #a044ff, #e73827);
background-repeat: no-repeat;
background-size: 1000% 1000%;
animation: gradient 240s ease infinite;
}
.title{
  color: #fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
