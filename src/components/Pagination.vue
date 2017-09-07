<template lang="html">
  <div class="btn-container">
    <button type="button" v-on:click="previous" name="button">Previous Page</button>
    <button type="button" v-on:click="next" name="button">Next Page</button>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    data () {
      return {

      }
    },
    props: [],
    methods: {
      previous () {
        this.$emit('previous')
      },
      next () {
        this.$emit('next')
      }
    }
  }
</script>

<style lang="css">
  .btn-container {
    margin-top: 35px;
  }
</style>
