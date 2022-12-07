import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReducer: (state, { payload }) => {},
  },
});

export const selectAuth = (state) => state.auth;
export const { loginReducer } = authSlice.actions;
export default authSlice.reducer;
