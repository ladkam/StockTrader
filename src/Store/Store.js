import Vue from 'vue';
import Vuex from 'vuex'
import portfolio from "../components/portfolio";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:
    {
      Portfolio: {
        Google: {quantity: 0, value: 100},
        Amazon: {quantity: 0, value: 100},
        Facebook: {quantity: 0, value: 100},
        Ebay: {quantity: 0, value: 100}
      },
      funds : 100000
    },
  getters: {
    PortfolioValue: state =>
    {
      let result=0;
      for(let stock in state.Portfolio)
        result+=state.Portfolio[stock].value*state.Portfolio[stock].quantity;
      return result;
    }


          },
  mutations: {
    Buy (state, Payload) {
      state.Portfolio[Payload.stock].quantity += Payload.quantity;
      state.funds -= Payload.quantity*state.Portfolio[Payload.stock].value

    },
    Sell (state, Payload) {
      state.Portfolio[Payload.stock].quantity -= Payload.quantity;
      state.funds += Payload.quantity*state.Portfolio[Payload.stock].value
    },
    endDay (state){
      for(let stock in state.Portfolio)
      {
        state.Portfolio[stock].value=Math.round(state.Portfolio[stock].value*(1+(Math.round(Math.random()) * 2 - 1)*0.1))
      }
    }
  },
  actions :
    {
      Buy : (context,payload)=>{
        context.commit('Buy',payload);}
    ,
      Sell : (context,payload)=> {
        context.commit('Sell', payload);
      },
      endDay : ({commit})=>{
        commit('endDay')
      }
    }


  }
)



