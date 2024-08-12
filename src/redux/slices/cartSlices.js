import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  clearCart,
  getCart,
  removeFromCart,
  updateCartQuantity,
} from "../../services/cartService";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
  const response = await getCart(userId);
  return response;
});

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async ({ userId, courseId }) => {
    const response = await addToCart(userId, courseId);
    return response;
  }
);

export const editCartQuantity = createAsyncThunk(
  "cart/editCartQuantity",
  async ({ userId, courseId, quantity }) => {
    const response = await updateCartQuantity(userId, courseId, quantity);
    return response;
  }
);

export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async ({ userId, courseId }) => {
    const response = await removeFromCart(userId, courseId);
    return response;
  }
);

export const clearItemCart = createAsyncThunk(
  "cart/clearItemCart",
  async (userId) => {
    const response = await clearCart(userId);
    return response;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload ? action.payload.items : [];
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(editCartQuantity.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(clearItemCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
  },
});

export default cartSlice.reducer;