<template lang="html">
    <div class="col col-md-3">
      <div class="box">
        <h3>
          {{pokemonName}}
        </h3>
        <h3>id: {{pokemonsId[index]}}</h3>
        <img :src="url" alt="">
        <br>
        <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#'+pokemonName">More info</button>
      </div>
      <single :pokemonName="pokemonName"></single>
    </div>
</template>

<script>
  import Single from '@/components/SinglePokemon'
  import Vue from 'vue'
  export default {
    name: 'Pokemon',
    components: {
      Single
    },
    data () {
      return {
        url: ''
      }
    },
    props: ['pokemonName', 'index', 'pokemonsId'],
    mounted  () {
      console.log(this.pokemonName)
      this.url = `${Vue.config.pokeapi.ENDPOINTSPRITE}${this.pokemonsId[this.index]}.png`
    },
    methods: {

    }
  }
</script>

<style lang="css">
  .box{
    padding: 5px;
    background: #fff;
    margin-top: 20px;
    border-radius:3px;
    min-height: 200px;
    -webkit-box-shadow: -5px -5px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -5px -5px 5px 0px rgba(0,0,0,0.75);
    box-shadow: -5px -5px 5px 0px rgba(0,0,0,0.75);
  }
</style>
