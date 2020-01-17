import portfolio from './components/portfolio'
import Stocks from './components/Stocks'
import newStock from './components/newStock'

/*
import stock from './components/stock'
*/
import Home from './components/Home'



export const routes= [
  {
    path:'',
    component:Home,
    name:'Home'
  },
  {
    path: '/portfolio',
    component: portfolio,
    name: 'Portfolio'
  },
  {
    path: '/Stocks',
    component: Stocks,
    name: 'Stocks'
  },
  {
    path:'/newStock',
    component:newStock,
    name: 'newStock'
  }
];
