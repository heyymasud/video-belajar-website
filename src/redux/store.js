import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cartSlices";
import authSlices from "./slices/authSlices";
import courseSlices from "./slices/courseSlices";

const store = configureStore({
  reducer: {
    cart: cartSlices,
    auth: authSlices,
    courses: courseSlices
  },
});
console.log("oncreate store", store.getState());

store.subscribe(() => {
  console.log("onchange store", store.getState());
});

export default store;
