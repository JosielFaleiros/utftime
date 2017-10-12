<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/">Click</router-link>
    <router-link to="/vazio">Click</router-link>
  </div>
</template>
<script>
  export default {
    name: 'teste',
    data () {
      return {
        msg: 'Meu teste'
      }
    }
  }
</script>
