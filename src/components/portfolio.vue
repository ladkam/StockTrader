<template>
  <div >
    <h1>Portfolio</h1>
    <div class="mt-4">
      <b-card-group deck>
        <div v-for="(stockItem,stockName) in $store.state.Portfolio">
          <b-card v-if="stockItem.quantity>0"
            class="mt-2"
            border-variant="danger"
            header-bg-variant="danger"
            header-text-variant="white"
            align="center">
            <template v-slot:header>
              <h6 class="mb-0">{{stockName}} (Price: {{stockItem.value}}| Quantity: {{stockItem.quantity}})  </h6>
            </template>

            <b-card-text>
              <input type="number" @input="quantity=$event.target.value" placeholder="enter a number">
              <b-button  variant="warning" @click="sell($event,stockName,quantity)"> sell </b-button>
              <!--
                        <p><small> you have {{stockItem}} $ of this</small></p>
              -->
            </b-card-text>
          </b-card>

        </div>

      </b-card-group>
    </div>
  </div>

</template>



<script>
  export default {
    data(){
      return{

        quantity:0,
        stock:''
      }
    },
    methods:
      {
        sell($event,stockName,value){
          this.$store.dispatch('Sell',{'stock':stockName,'quantity':parseInt(value,10)});
          console.log('bought')
        }
      }
  }

</script>

