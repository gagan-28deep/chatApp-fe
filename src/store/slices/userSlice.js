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
    setInitialState : (state) => {
      state.user = null;
      state.userLoading = false;
      state.userError = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const {
  setUserLoading,
  setUser,
  setUserError,
  setAccessToken,
  setRefreshToken,
  setInitialState
} = userSlice.actions;
export default userSlice.reducer;
