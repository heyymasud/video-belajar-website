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
        state.items = action.payload.items;
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
// const initialState = {
//     cartItems: [],
//     cartTotalQuantity: 0,
//     cartTotalAmount: 0
// };

// const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
//             if (itemInCart) {
//                 itemInCart.qty++;
//             } else {
//                 state.cartItems.push({ ...action.payload, qty: 1 });
//             }
//         },
//         removeFromCart: (state, action) => {
//             state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
//         },
//         clearCart: (state) => {
//             state.cartItems = [];
//         },
//         getTotals: (state) => {
//             let { total, quantity } = state.cartItems.reduce(
//                 (cartTotal, cartItem) => {
//                     const { cardPriceNum: price, qty } = cartItem;
//                     const itemTotal = price * qty;
//                     cartTotal.total += itemTotal;
//                     cartTotal.quantity += qty;
//                     return cartTotal;
//                 },
//                 {
//                     total: 0,
//                     quantity: 0
//                 }
//             );
//             state.cartTotalQuantity = quantity;
//             state.cartTotalAmount = total;
//         },
//         editQty: (state, action) => {
//             const item = state.cartItems.find((item) => item.id === action.payload.id);
//             item.qty = action.payload.qty;
//         }
//     }
// })

// export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals, editQty } = cartSlice.actions;
// export default cartSlice.reducer;
