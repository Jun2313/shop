import { configureStore, createSlice } from "@reduxjs/toolkit";

import user from './store/userSlice'





let stock = createSlice ({
  name : 'stock',
  initialState : [10, 11, 12]
})

let cart = createSlice ({
  name : 'cart',
  initialState : [ 
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}],
  reducers : {
    UpNumber(state, action){
      // let 번호 = state.findIndex( (a)=>  a.id === action.payload)
      // state[번호].count++
      const index = action.payload;
      if(state[index]) {
        state[index].count +=1;
      }
  },
    addToCart : (state, action) => {
      state.push(action.payload);
    },
    removeToCart : (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.length) {
        state.splice(index, 1);
      }
      if (state.length === 0) {
        alert('더 이상 못 뺴유');
      }
    }
  },
});

export let { UpNumber, addToCart, removeToCart } = cart.actions
export default configureStore ({
  reducer : {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
})