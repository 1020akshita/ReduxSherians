import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "../store/reducers/UserReducer"
import ProductReducer from "../store/reducers/ProductReducer"


export const store = configureStore({
  reducer: {
    UserReducer: UserReducer,
    ProductReducer: ProductReducer,
  },
})

export default store; 