import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authLoading: false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthLoading(state, value) {
      state.authLoading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setAuthLoading, setToken } = authSlice.actions;
export default authSlice.reducer;
