import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoading: false,
  user: null,
  userError: null,
  accessToken: null,
  refreshToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoading: (state) => {
      state.userLoading = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserError: (state, action) => {
      state.userError = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export const {
  setUserLoading,
  setUser,
  setUserError,
  setAccessToken,
  setRefreshToken,
} = userSlice.actions;
export default userSlice.reducer;
