import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cartSlices";

const store = configureStore({
    reducer: {
        cart: cartSlices
    }
})
console.log("oncreate store" ,store.getState());

store.subscribe(() => {
    console.log("onchange store" ,store.getState());
})

export default store