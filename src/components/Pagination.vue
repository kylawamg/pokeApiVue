<template lang="html">
  <div class="btn-container">
    <button class="btn btn-primary npBtn"type="button" v-on:click="previous" name="button">Previous Page</button>
    <button class="btn btn-primary npBtn"type="button" v-on:click="next" name="button">Next Page</button>
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
    margin:0 auto;
    position:fixed;
    bottom: 10px;
    left: 43%;
  }
  .npBtn{
    -webkit-box-shadow: -3px -3px 3px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -3px -3px 3px 0px rgba(0,0,0,0.75);
    box-shadow: -3px -3px 3px 0px rgba(0,0,0,0.75);
  }
</style>
