import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  userLoading: false,
};

const userSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload;
    },
    setUserLoading(state, value) {
      state.userLoading = value.payload;
    },
  },
});

export const { setUser, setUserLoading } = userSlice.actions;
export default userSlice.reducer;
