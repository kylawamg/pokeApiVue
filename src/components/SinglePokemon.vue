<template lang="html">
  <div class="modal fade" :id="pokemonName" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">{{pokemonName}}</h4>
      </div>
      <div class="modal-body">
        {{pokemonInfo.height}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'Single',
  data () {
    return {
      pokemonInfo: {}
    }
  },
  props: ['pokemonName'],
  mounted () {
    this.infoPokemon()
  },
  methods: {
    infoPokemon () {
      return window.fetch(`${Vue.config.pokeapi.ENDPOINTSINGLE}${this.pokemonName}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.pokemonInfo = json
        console.log(this.pokemonInfo)
      })
    }
  }
}
</script>
<style>

</style>
