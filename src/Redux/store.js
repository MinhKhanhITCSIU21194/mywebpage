import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slice/cartslice'

export const store = configureStore({
  reducer: {
    cart: productReducer
  },
})
