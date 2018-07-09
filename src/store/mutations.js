import Vue from 'vue'

export const UPDATE_POKEMONS = (state, payload) => {
  const pokemons = {}
  if (payload && payload.length > 0) {
    payload.forEach((pokemon, index) => {
      pokemons[index] = pokemon
    })
  }
  Vue.set(state, 'pokemonsData', pokemons)
}

export const UPDATE_ERROR = (state, payload) => {
  state.error = payload
}

export const UPDATE_LOADING = (state, payload) => {
  state.loading = payload
}

export const UPDATE_SELECTED_POKEMON = (state, payload) => {
  Vue.set(state, 'selectedPokemon', payload)
}
