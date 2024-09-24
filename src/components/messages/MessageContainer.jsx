import { useSelector } from "react-redux";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { MessageCircle } from "lucide-react";

// import { MessageCircle } from "lucide-react";
import useChatScroll from "../../hooks/useChatScroll.js"
const MessageContainer = () => {
  const messages = useSelector((state) => state?.messages?.messages);
  const ref = useChatScroll(messages)
  const selectedConversation = useSelector(
    (state) => state?.conversation?.selectedConversation
  );
  return (
    <div className="w-full flex flex-col overflow-y-auto" ref={ref}>
      {selectedConversation ? (
        <div className="w-full flex flex-col">
          <>
            {/* Header */}
            <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="label-text">To:</span>{" "}
              <span className="text-gray-900 font-bold">{selectedConversation?.fullname}</span>
            </div>

            <Messages />
            <MessageInput />
          </>
        </div>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const user = useSelector((state) => state?.user?.user);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {user?.loggedInUser?.fullname} ❄</p>
        <p>Select a chat to start messaging</p>
        <MessageCircle className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
