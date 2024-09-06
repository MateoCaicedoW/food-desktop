import { createSlice } from "@reduxjs/toolkit";
import { Product, Products } from "../entities/product";

const initialState = []

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = Product.fromJSON(action.payload)
            state.push(product)
        },
        getProducts: (state, action) => {   
            Products.fromJSON(action.payload).map(product => {
                state.push(product)
            })

            return state
        },
        // removeProduct: (state, action) => {
        //     return state.filter(product => product.id !== action.payload.id)
        // },
        // updateProduct: (state, action) => {
        //     return state.map(product => {
        //         if (product.id === action.payload.id) {
        //             return action.payload
        //         }
        //         return product
        //     })
        // }
    }
})


export const { addProduct, getProducts } = productSlice.actions;
export default productSlice.reducer;