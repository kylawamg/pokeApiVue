
import service from '../service/index'

export const getAll = ({ commit }, offset) => {
  commit('UPDATE_LOADING', true)
  try {
    service.getAllPokemons(offset)
      .then((res) => {
        if (res && res.data) {
          commit('UPDATE_POKEMONS', res.data.results)
        } else if (res && res.errorMsg) {
          commit('UPDATE_ERROR', res.errorMsg)
        }
        commit('UPDATE_LOADING', false)
      })
  } catch (e) {
    console.log(e)
    commit('UPDATE_LOADING', false)
    commit('UPDATE_ERROR', 'Error en el servicio')
  }
}
export const getSelectedPokemon = ({ commit }, url) => {
  commit('UPDATE_LOADING', true)
  try {
    return service.getPokemonByUrl(url)
      .then((res) => {
        if (res && res.data) {
          commit('UPDATE_SELECTED_POKEMON', formatPokemonData(res.data))
          commit('UPDATE_LOADING', false)
        }
        console.log(res)
      })
  } catch (e) {
    console.log(e)
    commit('UPDATE_LOADING', false)
    commit('UPDATE_ERROR', 'Error en el servicio')
  }
}

function formatPokemonData (pokemon) {
  const pokemonToSave = {
    abilities: [],
    types: []
  }
  if (pokemon.name) {
    pokemonToSave.name = pokemon.name
  }
  if (pokemon.height) {
    pokemonToSave.height = pokemon.height
  }
  if (pokemon.id) {
    pokemonToSave.id = pokemon.id
  }
  if (pokemon.weight) {
    pokemonToSave.weight = pokemon.weight
  }
  if (pokemon.abilities && pokemon.abilities.length > 0) {
    pokemon.abilities.forEach((ability) => {
      pokemonToSave.abilities.push(ability.ability.name)
    })
  }
  if (pokemon.types && pokemon.types.length > 0) {
    pokemon.types.forEach((type) => {
      pokemonToSave.types.push(type.type.name)
    })
  }
  if (pokemon.sprites) {
    if (pokemon.sprites.front_default) {
      pokemonToSave.imagen = pokemon.sprites.front_default
    } else if (pokemon.sprites.front_shiny) {
      pokemonToSave.imagen = pokemon.sprites.front_shiny
    }
  }
  return pokemonToSave
}
