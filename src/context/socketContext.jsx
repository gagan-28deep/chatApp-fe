import { createContext, useState, useEffect, useContext, useRef } from "react";
import io, { Socket } from "socket.io-client";
import { useSelector } from "react-redux";

const socketUrl =
  import.meta.env.MODE === String("development")
    ? "http://localhost:8000"
    : "https://chatapp-be-ecnt.onrender.com/";

const SocketContext = createContext();

export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider"
    );
  }
  return context;
};

const SocketContextProvider = ({ children }) => {
  const user = useSelector((state) => state?.user?.user?.loggedInUser);
  const socketRef = useRef();
  const [onlineUsers, setOnlineUsers] = useState([]);
  useEffect(() => {
    if (user) {
      const socket = io(socketUrl, {
        query: {
          userId: user?.id,
        },
      });
      socketRef.current = socket;
      socket.on("getonlineusers", (users) => {
        setOnlineUsers(users);
      });
      return () => {
				socket.close();
				socketRef.current = null;
			};
    } else if (!user) {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
    }
  }, [user]);

  return (
    <SocketContext.Provider value={{ socket: socketRef.current, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;