<template lang="html">
  <div>
    <div>
      <span><strong>Name: {{pokemon.name}}</strong></span>
    </div>
    <div>
      <span><strong>Types: </strong></span>
      <li v-for="type in pokemon.types">{{type}}</li>
    </div>
    <div>
      <span><strong>Height:{{pokemon.height}}</strong></span>
    </div>
    <div>
      <span><strong>Weight: {{pokemon.weight}}</strong></span>
    </div>
    <div>
      <span><strong>Abilities: </strong></span>
      <li v-for="ability in pokemon.abilities">{{ability}}</li>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pokemon-data',
    components: {
    },
    props: ['pokemon'],
    data () {
      return {

      }
    }
  }
</script>

<style lang="css">

</style>
