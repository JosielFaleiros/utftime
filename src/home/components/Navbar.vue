<template>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand" href="#">UTFTIME</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <router-link to="/login">Login</router-link>
            </div>
        </div>
    </nav>
</template>
<script>
  export default {
    name: 'navbar',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>
<style>
  .navbar {
    margin-bottom: 0;
    border-radius: 0;
  }
</style>