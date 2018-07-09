<template lang="html">
  <div id="error-screen">
      <p>An error ocurred: </p>
      <span>{{error}}</span>
  </div>
</template>

<script>
  export default {
    name: 'ErrorScreen',
    components: {
    },
    props: ['error'],
    data () {
      return {

      }
    }
  }
</script>

<style lang="css">

</style>
