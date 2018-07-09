<template>
  <div id="stats">
    <div v-if="selectedPokemon && selectedPokemon.name">
      <pokemon-data :pokemon="selectedPokemon"></pokemon-data>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import LoadingScreen from '@/components/LoadingScreen'
  import PokemonData from '@/components/PokemonData'
  export default {
    name: 'screen',
    components: {
      LoadingScreen,
      PokemonData
    },
    computed: {
      ...mapState(['error', 'pokemonsData', 'loading', 'selectedPokemon'])
    },
    data () {
      return {
      }
    }
  }
</script>

<style>

</style>
