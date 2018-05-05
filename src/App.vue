<template>
  <div id="app" class="box">
    <custom-header></custom-header>
    <main>
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </main>
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
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
