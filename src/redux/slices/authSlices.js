import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isLogin")) || { isLogin: false },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const userData = JSON.parse(localStorage.getItem("users") || "[]");
      const isLogin = JSON.stringify({
        isLogin: true,
        name: userData.find((user) => user.email === payload.email).username,
      });
      localStorage.setItem("isLogin", isLogin);
      state.isAuthenticated = { isLogin: true };
    },
    logout: (state) => {
      localStorage.removeItem("isLogin");
      state.isAuthenticated = { isLogin: false };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
