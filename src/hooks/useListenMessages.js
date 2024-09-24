import { useEffect } from "react";
import useMessages from "./useMessages";
import useSocket from "./useSocket";
import { useSelector } from "react-redux";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { getConversationMessages, sendConversationMessage } = useMessages();
  const { socket, onlineUsers } = useSocket();
  const messages = useSelector((state) => state?.messages?.messages);

  const setNewMessage = async () => {
    await socket.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();
      getConversationMessages();
    });
  };

  useEffect(() => {
    setNewMessage();

    return () => {
      socket.off("newMessage");
    }
  }, [messages]);

  return {
    setNewMessage,
  };
};

export default useListenMessages;
