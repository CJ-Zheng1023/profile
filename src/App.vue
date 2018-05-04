<template>
  <div id="app" class="box">
    <custom-header></custom-header>
    <router-view></router-view>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomHeader from 'components/Header'
import CustomFooter from 'components/Footer'
export default {
  components: {
    CustomHeader,
    CustomFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
