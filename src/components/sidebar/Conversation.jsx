import { useSelector } from "react-redux";
import useConversation from "../../hooks/useConversation";
import { useSocketContext } from "../../context/socketContext";
import useSocket from "../../hooks/useSocket";
import { useEffect } from "react";
const Conversation = ({ conversation, emojis }) => {
  const {onlineUsers , socket , handleGetSocket} = useSocket();
  useEffect(() => {
    const initial = async () => {
      await handleGetSocket();
    }
    initial();
  } , []);
  const { setConversation } = useConversation();
  const selectedConversation = useSelector(
    (state) => state?.conversation?.selectedConversation
  );
  const isSelected = selectedConversation?.id === conversation.id;
  // const onlineUsers = useSelector((state) => state?.socket?.onlineUsers);
  // console.log("onlineUsers" , onlineUsers);
  const isOnline = onlineUsers?.includes(conversation?.id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
			${isSelected ? "bg-sky-500" : ""}
			`}
        onClick={() => setConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-8 md:w-12 rounded-full">
            <img src={conversation?.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 text-sm md:text-md">
              {conversation.fullname}
            </p>
            <span className="text-xl hidden md:inline-block">{emojis}</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};
export default Conversation;
