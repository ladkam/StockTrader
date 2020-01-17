<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand :to="{name:'Home'}">Stock Trader</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item active  :to="{name:'Portfolio'}">Portfolio</b-nav-item>
        <b-nav-item active :to="{name:'Stocks'}">Stocks</b-nav-item>

      </b-navbar-nav>



      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="endDay">End day</b-nav-item>
        <b-nav-item @click="endDay">Funds : {{$store.state.funds}} | Portfolio : {{PortfolioValue()}}</b-nav-item>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            Save & Load
          </template>
          <b-dropdown-item active @click="save" >Save</b-dropdown-item>
          <b-dropdown-item active @click="load">load</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  import axios from 'axios'

  export default{
    methods:{
      ...mapActions(['endDay']),
      ...mapGetters(["PortfolioValue"]),
      save(){
        axios.put("https://plated-mantra-261914.firebaseio.com/saveStocks.json",this.$store.state).then(response =>
        {
          console.log(response);
        },error=>
          {
            console.log(error);
          }
        );

        console.log('save')
      },
      load(){
        axios.get("https://plated-mantra-261914.firebaseio.com/saveStocks.json").then(response =>
          {
            console.log(response);
            this.$store.state.funds=response.data.funds;
            this.$store.state.Portfolio=response.data.Portfolio;
          },error=>
          {
            console.log(error);
          }
        );

        console.log('save')
      }
    }
  }

</script>
