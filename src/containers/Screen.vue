<template>
      <div id="screen">
        <div id="topPicture">
          <div id="buttontopPicture1"></div>
          <div id="buttontopPicture2"></div>
        </div>
        <div id="picture" >
          <loading-screen v-if="loading"></loading-screen>
          <router-view v-if="!loading" :pokemons="pokemonsData"@selectPokemon="getPokemonSelected($event)" :url="selectedPokemon.imagen"></router-view>
          <error-screen :error="error" v-if="error"></error-screen>
        </div>

        <div id="buttonbottomPicture"></div>
        <div id="speakers">
          <div class="sp"></div>
          <div class="sp"></div>
          <div class="sp"></div>
          <div class="sp"></div>
        </div>
      </div>

</template>

<script>
  import { mapState } from 'vuex'
  import ErrorScreen from '@/components/ErrorScreen'
  import PokemonList from '@/components/PokemonList'
  import LoadingScreen from '@/components/LoadingScreen'
  export default {
    name: 'screen',
    components: {
      LoadingScreen,
      ErrorScreen,
      PokemonList
    },
    computed: {
      pokemonsLength () {
        if (this.pokemonsData) {
          return Object.keys(this.pokemonsData).length
        }
        return 0
      },
      ...mapState(['error', 'pokemonsData', 'loading', 'selectedPokemon'])
    },
    data () {
      return {}
    },
    methods: {
      getPokemonSelected (event) {
        this.$store.dispatch('getSelectedPokemon', event.url)
          .then(() => {
            this.$router.push({name: 'pokemon', params: { name: this.selectedPokemon.name }})
          })
      }
    }
  }
</script>

<style>
 #picture {
   overflow-y: scroll;
   overflow-x:hidden;
 }
</style>
