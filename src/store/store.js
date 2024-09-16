import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import conversationSlice from "./slices/conversationSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    conversation: conversationSlice,
  },
});
