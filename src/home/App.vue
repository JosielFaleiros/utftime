<template>  
  <div id="app">
    <app-navbar>
    </app-navbar>
    <app-container>
    </app-container>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import Navbar from './components/Navbar.vue'
  import Container from './components/Container.vue'
  import Footer from './components/Footer.vue'
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