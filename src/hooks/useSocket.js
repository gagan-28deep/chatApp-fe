import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import {
  setSocket,
  clearSocket,
  setOnlineUsers,
} from "../store/slices/socketSlice";

const socketUrl =
  import.meta.env.MODE === String("development")
    ? "http://localhost:8000"
    : "https://chatapp-be-ecnt.onrender.com/";

const useSocket = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user?.loggedInUser);
  const socket = useSelector((state) => state?.socket?.socket);
  const onlineUsers = useSelector((state) => state?.socket?.onlineUsers);

  const handleGetSocket = () => {
    if (user && !socket) {
      const newSocket = io(socketUrl, {
        query: {
          userId: user.id,
        },
      });

      // Listen for online users and update state
      newSocket.on("getonlineusers", (users) => {
        dispatch(setOnlineUsers(users));
      });

      dispatch(setSocket(newSocket));

      // Clean up socket connection on unmount or user logout
      return () => {
        newSocket.close();
        dispatch(clearSocket());
      };
    }
    // If user logs out
    else if (!user && socket) {
      socket.close();
      dispatch(clearSocket());
    }
  };

  useEffect(() => {
    handleGetSocket();
  }, [user, dispatch, socket]);

  return { socket, onlineUsers, handleGetSocket };
};

export default useSocket;
