<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <app-navbar></app-navbar>
    <app-container></app-container>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import Navbar from './components/Navbar'
  import Container from './components/Container'
  import Footer from './components/Footer'
  export default {
    name: 'app',
    components: {
      appNavbar: Navbar,
      appContainer: Container,
      appFooter: Footer
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
