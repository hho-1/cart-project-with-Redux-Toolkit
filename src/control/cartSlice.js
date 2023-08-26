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
        },
        increase:(state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.quantity += 1;
        },
        decrease:(state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.quantity -= 1;
        },
        calculateTotal:(state, action) => {
            let total = 0;
            let quantity = 0;
            state.cartItems.forEach((item) => { 
                total += item.quantity * item.price
                quantity += item.quantity
            })
            state.quantity = quantity;
            state.total = total;
        }
    }
})

export const {clearCart, removeItem, increase, decrease, calculateTotal} = cartSlice.actions


export default cartSlice.reducer;