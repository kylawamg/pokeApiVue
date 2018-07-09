import Vue from 'vue'
import Router from 'vue-router'
import PokemonImage from '@/components/PokemonImage'
import PokemonList from '@/components/PokemonList'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: PokemonList
    },
    {
      path: '/pokemon/:name',
      name: 'pokemon',
      component: PokemonImage
    }
  ]
})
