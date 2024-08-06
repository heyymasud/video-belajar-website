import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.cartItems.push({ ...action.payload, qty: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        },
        decreaseCart: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            item.qty--;
            if (item.qty < 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            }  
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        getTotals: (state) => {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { cardPriceNum: price, qty } = cartItem;
                    const itemTotal = price * qty;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += qty;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        editQty: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            item.qty = action.payload.qty;
        }
    }
})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals, editQty } = cartSlice.actions;
export default cartSlice.reducer;