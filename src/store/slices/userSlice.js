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
    setUserLoading: (state , action) => {
      state.userLoading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.userLoading = false;
    },
    setUserError: (state, action) => {
      state.userError = action.payload;
      state.userLoading = false;
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
