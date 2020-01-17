<template>
  <div>
    <h1>Trade or view your portfolio</h1>
    <p>you may save & load your </p>
    <p> Click on end day to close day </p>
    <hr>
    <p class="lab"> Your funds are : <span>{{$store.state.funds}} $</span> </p>
  </div>
</template>

<script>

  import header from '../header'

  export default {
    name: 'app',
    components:{
      appHeader:header
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
  .lab{
    font-weight: Bold;
    font-size:120%;
  }
</style>
