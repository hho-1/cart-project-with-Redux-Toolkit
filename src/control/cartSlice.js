import { createSlice } from "@reduxjs/toolkit";
import products from "../data";


const initialState = {
    cartItems: products,
    quantity: 1,
    total:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state) => {
            state.cartItems = []
        }
    },
    increase:(state, action) => {
        const cartItem = state.cartItems.find((item) => item.id === action.payload)
        cartItem.quantity1 += 1
    }
})

export const {clearCart, removeItem} = cartSlice.actions


export default cartSlice.reducer;