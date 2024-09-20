import { useSelector } from "react-redux";
import { DUMMY_MESSAGES } from "../../dummy_data/dummy";
import Message from "./Message";
import { useEffect } from "react";
import useMessages from "../../hooks/useMessages";
const Messages = () => {
  const selectedConversation = useSelector(
    (state) => state?.conversation?.selectedConversation
  )
  const { getConversationMessages } = useMessages();
  useEffect(() => {
    const initial = async () => {
      await getConversationMessages();
    };
    initial();
  }, [selectedConversation?.id]);
  const messages = useSelector((state) => state?.messages?.messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};
export default Messages;
