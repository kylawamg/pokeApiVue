<template lang="html">
  <img :src="url" alt="" class="imagen-pokemon">
</template>

<script>
  export default {
    name: 'pokemon-image',
    components: {
    },
    props: ['url'],
    data () {
      return {

      }
    }
  }
</script>

<style lang="css">
  .imagen-pokemon {
    width: 150px;
    height: 150px;

  }
</style>
