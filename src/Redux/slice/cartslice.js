import { createSlice } from "@reduxjs/toolkit";



const ProductSlice = createSlice({
    name : "products",
    initialState : {
        CartArr: [],
    },
    reducers: {
      AddProd: (state, action) => {
        const productIndex =state.CartArr.findIndex((product) => product.id === action.payload.id)
        if (productIndex !== -1){
          state.CartArr[productIndex].quantity += 1
          state.CartArr[productIndex].total = state.CartArr[productIndex].quantity * state.CartArr[productIndex].Price
        } else {
          state.CartArr.push({...action.payload, quantity:1})
          state.CartArr[state.CartArr.length-1].total = state.CartArr[state.CartArr.length-1].Price
       
        }

      },
      DeleteProd: (state, action ) => {
        const productIndexDel = action.payload.id
        const newCart = state.CartArr.filter((product) => product.id !== productIndexDel)
        return {...state, CartArr: newCart}
      },
    },
})
  
  // Action creators are generated for each case reducer function
  export const { AddProd, DeleteProd } = ProductSlice.actions
  
  export default ProductSlice.reducer