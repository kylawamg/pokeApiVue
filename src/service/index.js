import axios from 'axios'
export const URL_GET_ALL_POKEMONS = 'http://pokeapi.co/api/v2/pokemon/'
export default {
  getAllPokemons (offset) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=949`)
        .then(handleErrors)
        .then(response => response)
        .catch(error => ({ errorMsg: error.message }))
  },
  getPokemonByUrl (url) {
    return axios.get(url)
      .then(handleErrors)
      .then(response => response)
      .catch(error => ({ errorMsg: error.message }))
  }
}

function handleErrors (response) {
  if (response.status !== 200) {
    throw Error(response.statusText)
  }
  return response
}
