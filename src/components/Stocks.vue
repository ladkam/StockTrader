<template>
  <div >
    <h1>Stocks</h1>
  <div class="mt-4">
    <b-card-group deck>
    <div v-for="(stockItem,stockName) in $store.state.Portfolio">
      <b-card
        class="mt-2"
        border-variant="primary"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center">
        <template v-slot:header>
          <h6 class="mb-0">{{stockName}} (Price: {{stockItem.value}})  </h6>
        </template>

        <b-card-text>
          <input type="number" @input="quantity=$event.target.value" placeholder="enter a number">
          <b-button  variant="success" @click="Buy({'stock':stockName,'quantity':parseInt(quantity,10)})"> buy </b-button>
<!--
          <p><small> you have {{stockItem}} $ of this</small></p>
-->
        </b-card-text>
      </b-card>

    </div>

      <p class="h1 mb-1" align="center" >         <router-link active :to="{name:'newStock'}"> <b-icon icon="plus"></b-icon> </router-link>
      </p>


    </b-card-group>


  </div>
  </div>

</template>



<script>

  import { mapActions } from 'vuex'


  export default {
    data(){
      return{

        quantity:0,
        stock:''
      }
  },
    methods: {
      ...mapActions(["Sell","Buy"])
        /*buy($event,stockName,value){
          this.$store.dispatch('Buy',{'stock':stockName,'quantity':parseInt(value,10)});
        }*/
      }
  }

</script>

