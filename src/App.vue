<template>
  <b-container class="mt-4">
    <app-header></app-header>
    <transition name="slide">
    <router-view></router-view>
    </transition>
  </b-container>
</template>

<script>

  import header from './header'
  import Home from './header'

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

.slide-enter-active {
  animation: slide-in 2s
}

.slide-leave-active {
  animation: slide-out
}

  @keyframes slide-in {
    from{
      transform: translateY(-30px);
      opacity:0
    }
    to
    {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-30);
      opacity: 0;
    }
  }

</style>
