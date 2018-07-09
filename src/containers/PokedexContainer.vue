<template>
  <!-- <div id="app">
       <h1 class="title">{{ title }}</h1>
       <div class="container">
         <pokemon v-for="(name, index) in pokemonsName" :pokemonName="name" :index="index" :pokemonsId="pokemonsId">

         </pokemon>
         <pagination @next="nextPage" @previous="previousPage">
         </pagination>
       </div>
   </div> -->
  <div id="pokedex">
    <div id="left">
      <div id="logo"></div>
      <div id="bg_curve1_left"></div>
      <div id="bg_curve2_left"></div>
      <div id="curve1_left">
        <div id="buttonGlass">
          <div id="reflect"> </div>
        </div>
        <div id="miniButtonGlass1"></div>
        <div id="miniButtonGlass2"></div>
        <div id="miniButtonGlass3"></div>
      </div>
      <div id="curve2_left">
        <div id="junction">
          <div id="junction1"></div>
          <div id="junction2"></div>
        </div>
      </div>
      <screen></screen>
      <div id="bigbluebutton"></div>
      <div id="barbutton1"></div>
      <div id="barbutton2"></div>
      <div id="cross">
        <div id="leftcross">
          <div id="leftT"></div>
        </div>
        <div id="topcross">
          <div id="upT"></div>
        </div>
        <div id="rightcross">
          <div id="rightT"></div>
        </div>
        <div id="midcross">
          <div id="midCircle"></div>
        </div>
        <div id="botcross">
          <div id="downT"></div>
        </div>
      </div>
    </div>
    <div id="right">
      <secondary-screen></secondary-screen>
      <div id="blueButtons1">
        <div class="blueButton"></div>
        <div class="blueButton"></div>
        <div class="blueButton"></div>
        <div class="blueButton"></div>
        <div class="blueButton"></div>
      </div>
      <div id="blueButtons2">
        <div class="blueButton"></div>
        <div class="blueButton"></div>
        <div class="blueButton"></div>
        <div class="blueButton"></div>
        <div class="blueButton"></div>
      </div>
      <div id="miniButtonGlass4"></div>
      <div id="miniButtonGlass5"></div>
      <div id="barbutton3"></div>
      <div id="barbutton4"></div>
      <div id="yellowBox1"></div>
      <div id="yellowBox2"></div>
      <div id="bg_curve1_right"></div>
      <div id="bg_curve2_right"></div>
      <div id="curve1_right"></div>
      <div id="curve2_right"></div>
    </div>
  </div>
</template>

<script>
  import Screen from './Screen'
  import SecondaryScreen from './SecondaryScreen'
  export default {
    name: 'pokedex-container',
    components: {
      Screen,
      SecondaryScreen
    },
    data () {
      return {
      }
    },
    mounted () {
      this.$store.dispatch('getAll', 0)
    }
  }
</script>

<style>


</style>
