import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cartSlices";
import authSlices from "./slices/authSlices";

const store = configureStore({
    reducer: {
        cart: cartSlices,
        auth: authSlices
    }
})
console.log("oncreate store" ,store.getState());

store.subscribe(() => {
    console.log("onchange store" ,store.getState());
})

export default store