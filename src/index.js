import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';


/*** Redux data ***/
// let store = createStore(()=>{
//   return [
//     {id:0, name:'Black Jacket', quantity: 1, price: '$120'},
//     {id:1, name:'Cool Shoes', quantity: 2, price: '$60'} 
//   ]
// });


/*** Redux data modify method ***/
let cartState = [
  {id:0, name:'Black Jacket', quantity: 1, price: '$120'},
  {id:1, name:'Brownie Canvas', quantity: 2, price: '$60'} 
]
function reducer(state=cartState, modify){
  if (modify.type === 'addNum'){
    let copyState = [...state];
    copyState[0].quantity++;
    return copyState
  } else if(modify.type === 'deductNum'){
    let copyState2 = [...state];
    copyState2[0].quantity--;
    return copyState2
  } else {
    return state
  }
}

// Cart Page Modal //
let alertDefault = true;
function reducer2(state=alertDefault, modify){
  if(modify.type === 'closeModal'){
    state = false;
    return state;
  } else {
    return state
  }
}

let store = createStore(combineReducers({reducer, reducer2}));



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
         <App />
       </Provider>   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
