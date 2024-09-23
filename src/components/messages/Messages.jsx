import { useSelector } from "react-redux";
import { DUMMY_MESSAGES } from "../../dummy_data/dummy";
import Message from "./Message";
import { useEffect } from "react";
import useMessages from "../../hooks/useMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";
import useListenMessages from "../../hooks/useListenMessages.js";
const Messages = () => {
  const selectedConversation = useSelector(
    (state) => state?.conversation?.selectedConversation
  );
  const messagesLoading = useSelector(
    (state) => state?.messages?.messagesLoading
  );
  const messages = useSelector((state) => state?.messages?.messages);
  const { getConversationMessages } = useMessages();
  const { setNewMessage } = useListenMessages();
  useEffect(() => {
    const initial = async () => {
      await getConversationMessages();
    };
    initial();
  }, [selectedConversation?.id]);

  useEffect(() => {
    const initial = async () => {
      await setNewMessage();
    };
    initial();
  },[])
  if (messagesLoading) {
    return (
      <div className="px-4 flex-1 overflow-auto">
        <MessageSkeleton />
        <MessageSkeleton />
        <MessageSkeleton />
      </div>
    );
  }
  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages?.length > 0 &&
        messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      {messages?.length === 0 && (
        <p className="text-center">
          Please send a message to start a conversation
        </p>
      )}
    </div>
  );
};
export default Messages;
