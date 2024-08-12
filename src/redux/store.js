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
export default store;
