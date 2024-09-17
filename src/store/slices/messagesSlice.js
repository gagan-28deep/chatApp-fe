import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messagesLoading: false,
  messages: [],
  messagesError: null,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessagesLoading: (state) => {
      state.messagesLoading = true;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
      state.messagesLoading = false;
    },
    setMessagesError: (state, action) => {
      state.messagesError = action.payload;
      state.messagesLoading = false;
    },
  },
});

export const { setMessagesLoading, setMessages, setMessagesError } =
  messagesSlice.actions;
export default messagesSlice.reducer;
