import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    product: [{

    }]
}
export const ProductSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        getProducts: (state, action) => {
          console.log(action)           
        }
    }
})
export default ProductSlice.reducer

export const { getProducts } = ProductSlice.actions
// export const {}