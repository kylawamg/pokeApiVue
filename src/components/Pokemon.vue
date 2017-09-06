<template lang="html">
    <div class="col col-md-3">
      <div class="box" v-if="pokemonInfo">
        <h3>
          {{pokemonName}}
        </h3>
        <img :src="pokemonInfo.sprites.back_default" alt="">
        <br>
        <button type="button" class="btn btn-primary">More info</button>
      </div>
      <div v-if="!pokemonInfo" class="box">
        <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'Pokemon',
    data () {
      return {
        pokemonInfo: null
      }
    },
    props: ['pokemonName'],
    create  () {
      console.log('hola')
      this.singlePokemon(this.pokemonName)
    },
    methods: {
      singlePokemon (pokemon) {
        return window.fetch(`${Vue.config.pokeapi.ENDPOINTSINGLE}${pokemon}`)
        .then(response => {
          return response.json()
        })
        .then(json => {
          this.pokemonInfo = json
        })
      }
    }
  }
</script>

<style lang="css">
  .box{
    margin-top: 20px;
    border:1px solid black;
    min-height: 200px;
  }
</style>
