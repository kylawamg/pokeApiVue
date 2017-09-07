var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENDPOINT: '"http://pokeapi.co/api/v2/pokemon/?limit=8"',
  ENDPOINTSPRITE: '"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"',
  ENDPOINTSINGLE: '"http://pokeapi.co/api/v2/pokemon/"'
})
