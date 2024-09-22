import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";

const socketUrl =
  import.meta.env.MODE === String("development")
    ? "http://localhost:8000"
    : "https://chatapp-be-ecnt.onrender.com/";

const initialState = {
  socket: null,
  onlineUsers: [],
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket(state, action) {
      state.socket = action.payload;
    },
    setOnlineUsers(state, action) {
      state.onlineUsers = action.payload;
    },
    clearSocket(state) {
      state.socket?.close();
      state.socket = null;
      state.onlineUsers = [];
    },
  },
});

export const { setSocket, setOnlineUsers, clearSocket } = socketSlice.actions;

export default socketSlice.reducer;
