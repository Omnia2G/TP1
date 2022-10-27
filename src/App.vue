<template>
  <!-- <HelloWorld></HelloWorld>
  <UploaderCmp></UploaderCmp> -->
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import UploaderCmp from './components/UploaderCmp.vue';
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // UploaderCmp
    TheHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  * {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background-color: #FDF4E3;
  /* background-color: #FFFFF5; */
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>
