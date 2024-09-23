import { useEffect } from "react";
import useMessages from "./useMessages";
import useSocket from "./useSocket";
import { useSelector } from "react-redux";

const useListenMessages = () => {
  const { getConversationMessages, sendConversationMessage } = useMessages();
  const { socket, onlineUsers } = useSocket();
  const messages = useSelector((state) => state?.messages?.messages);

  const setNewMessage = async () => {
    await socket.on("newMessage", (newMessage) => {
      console.log("newMessage", newMessage);
      getConversationMessages();
    });
  };

  useEffect(() => {
    setNewMessage();
  }, [messages]);

  return {
    setNewMessage,
  };
};

export default useListenMessages;
