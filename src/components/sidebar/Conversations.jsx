import { DUMMY_CONVERSATIONS } from "../../dummy_data/dummy";
import Conversation from "./Conversation";
import useConversation from "../../hooks/useConversation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getRandomEmoji } from "../../utils/emojis";
const Conversations = () => {
  const conversationsData = useSelector(
    (state) => state?.conversation?.conversations
  );
  const conversationLoading = useSelector(
    (state) => state?.conversation?.conversationsLoading
  )
  const { getConversations } = useConversation();

  useEffect(() => {
    const initial = async () => {
      await getConversations();
    };
    initial();
  }, []);

  if (conversationLoading) {
    return <p className="loading loading-spinner mx-auto"></p>;
  }
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversationsData?.length > 0 &&
        conversationsData.map((conversation) => (
          <Conversation key={conversation.id} conversation={conversation} emojis = {getRandomEmoji()} />
        ))}
      {conversationsData?.length === 0 && (
        <p className="text-center">No conversations found</p>
      )}
    </div>
  );
};
export default Conversations;
