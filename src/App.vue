<template>
  <div id="app">
      <h1>{{ title }}</h1>
      <div class="container">
        <pokemon v-for="(name, index) in pokemonsName" :pokemonName="name">
        </pokemon>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Pokemon from '@/components/Pokemon'
export default {
  name: 'app',
  components: {
    Pokemon
  },
  data () {
    return {
      title: 'PokeApi with vue.js',
      pokemonsName: [],
      pokemons: {}
    }
  },
  created: function () {
    this.searchPokemon('charmander')
  },
  methods: {
    searchPokemon (pokemon) {
      return window.fetch(`${Vue.config.pokeapi.ENDPOINT}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.pokemons = json
        console.log(this.pokemons.results)
        for (var i = 0; i < this.pokemons.results.length; i++) {
          this.pokemonsName.push(this.pokemons.results[i].name)
        }
        console.log(this.pokemonsName)
      })
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
</style>
