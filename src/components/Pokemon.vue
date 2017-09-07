<template lang="html">
    <div class="col col-md-3">
      <div class="box">
        <h3>
          {{pokemonName}}
        </h3>
        <h3>{{index}}</h3>
        <img :src="url" alt="">
        <br>
        <button type="button" class="btn btn-primary">More info</button>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'Pokemon',
    data () {
      return {
        url: ''
      }
    },
    props: ['pokemonName', 'index', 'pokemonsId'],
    mounted  () {
      this.url = `${Vue.config.pokeapi.ENDPOINTSINGLE}${this.pokemonsId[this.index]}.png`
    },
    methods: {

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
