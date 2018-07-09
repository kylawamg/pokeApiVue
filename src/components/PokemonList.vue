<template lang="html">
  <div>
    <v-layout row>
      <v-flex xs12 sm12 class="wrapper-list">
        <v-form>
          <v-text-field
            outline
            label="Search"
            append-icon="mdi-magnify"
            v-model="search"
          ></v-text-field>
        </v-form>
        <transition-group name="card" tag="div">
        <v-card class="pokemon-card" v-for="(pokemon, index) in pokemonList" :key="index">
            <div class="pokemon-item":ref="index" @click="$emit(SELECT_POKEMON, pokemon)"@mouseover="hoverPokemon(index)">
              <span class="pokemon-name">{{pokemon.name}}</span>
            </div>
        </v-card>
        </transition-group>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  const SELECT_POKEMON = 'selectPokemon'

  export default {
    name: 'PokemonList',
    components: {
    },
    props: ['pokemons'],
    data () {
      return {
        SELECT_POKEMON,
        lastIndex: null,
        search: ''
      }
    },
    computed: {
      pokemonList: {
        get () {
          if (this.pokemons && Object.keys(this.pokemons).length > 0 && this.search === '') {
            const arr = Object.keys(this.pokemons)
            const pokemonsArr = []
            arr.forEach(e => {
              pokemonsArr.push(this.pokemons[e])
            })
            return pokemonsArr
          } else if (this.search !== '') {
            const arr = Object.keys(this.pokemons)
            const pokemonsArr = []
            arr.forEach(e => {
              pokemonsArr.push(this.pokemons[e])
            })
            const result = pokemonsArr.filter(e => e.name.startsWith(this.search))
            return result
          }
        },
        set (newValue) {
          if (newValue) {
            this.pokemonList = newValue
          }
        }
      }
    },
    methods: {
      searchPokemon (event) {
        this.search = true
        const arr = this.pokemonList.filter((e) => {
          e.name.startsWith(event)
        })
        this.pokemonList = arr
      },
      prependIconCallback () {},
      hoverPokemon (index) {
        if (this.lastIndex) {
          const itemsLastIndex = this.$refs[this.lastIndex]
          const span = itemsLastIndex[0]
          span.className = 'pokemon-item'
        }
        const itemsIndex = this.$refs[index]
        const spanIndex = itemsIndex[0]
        spanIndex.className = `${spanIndex.className} hover-name`
        this.lastIndex = index
      }
    }
  }
</script>

<style lang="scss">

  .pokemon-card {
    transition: all 0.5s;

  }
  .card-enter, .card-leave-to
    /* .card-leave-active for <2.1.8 */ {
    opacity: 0;
    transform: scale(0);
  }
  .card-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .card-leave-active {
    /*position: absolute;*/
  }

  .wrapper-list {
    padding: 10px;
  }
  .pokemon-card{
  }
  .pokemon-item {
    padding: 1.5px;
    -moz-transition:background .5s ease-in;
    -o-transition:background .5s ease-in;
    -webkit-transition:background .5s ease-in;
    background:#fff;
  }
  .pokemon-name {
    text-align: center;
    width: 100%;
    margin-left: 37%;
  }
  .hover-name {
    background: red;
    color: #fff;
    font-weight: bold;
  }
</style>
