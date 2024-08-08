import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("authData")) || false,
  modalOpen: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const isLogin = JSON.stringify({ isLogin: true, name: payload.name, token: payload.token });
      state.isAuthenticated = JSON.parse(isLogin);
      localStorage.setItem("authData", isLogin);
      state.modalOpen = true;
    },
    loginGoogle: (state, { payload }) => {
      const isLogin = JSON.stringify({
        isLogin: true,
        name: payload.name,
        token: payload.token,
      });
      state.isAuthenticated = JSON.parse(isLogin);
      localStorage.setItem("authData", isLogin);
      state.modalOpen = true;
    },
    logout: (state) => {
      localStorage.removeItem("authData");
      state.isAuthenticated = false;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
    openModal: (state) => {
      state.modalOpen = true;
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchUserByEmail.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchUserByEmail.fulfilled, (state, { payload }) => {
  //       state.loading = false;
  //       const isLogin = true;
  //       localStorage.setItem("isLogin", isLogin);
  //       state.isAuthenticated = true;
  //       state.user = payload;
  //     })
  //     .addCase(fetchUserByEmail.rejected, (state, { payload }) => {
  //       state.loading = false;
  //       state.error = payload;
  //     });
  // },
});

export const { login, loginGoogle, logout, closeModal, openModal } = authSlice.actions;
export default authSlice.reducer;
