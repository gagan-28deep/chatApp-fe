import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import conversationSlice from "./slices/conversationSlice";
import messagesSlice from "./slices/messagesSlice";
import socketSlice from "./slices/socketSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    conversation: conversationSlice,
    messages: messagesSlice,
    socket: socketSlice,
  },
});
