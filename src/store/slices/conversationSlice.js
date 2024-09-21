import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedConversation: null,
  messages: [],

  // For conversations to load
  conversationsLoading: false,
  conversations: [],
  conversationsError: null,
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setSelectedConversation: (state, action) => {
      state.selectedConversation = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },

    // For conversations to load
    setConversationsLoading: (state) => {
      state.conversationsLoading = true;
    },
    setConversations: (state, action) => {
      state.conversations = action.payload;
      state.conversationsLoading = false;
    },
    setConversationsError: (state, action) => {
      state.conversationsError = action.payload;
    },
  },
});

export const {
  setSelectedConversationLoading,
  setSelectedConversation,
  setSelectedConversationError,
  setMessages,

  // For conversations to load
  setConversationsLoading,
  setConversations,
  setConversationsError,
} = conversationSlice.actions;
export default conversationSlice.reducer;
