<template>
  <div class="container-fluid text-center">    
    <div class="row content">
      <div class="col-sm-2 sidenav">
        </div>
        <div class="col-sm-8 text-left"> 
          <div class="container-fluid cont">
            <h1>HORAS COMPLEMENTARES</h1>
            <h2>UTFTIME</h2>
            <router-view class="col-sm-12"></router-view>
          </div>
          </div>
          <div class="col-sm-2 sidenav">
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'container',
  data () {
    return {

    }
  }
}
</script>
<style>
    .row.content {height: 450px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 120%;
    }
    h1, h2 {
    	text-align: center;
    	color: lightblue;
    }
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;}
      .cont {
      	height: 360px;
      }
    } 

</style>