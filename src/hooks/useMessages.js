import {
  setMessages,
  setMessagesLoading,
  setMessagesError,
} from "../store/slices/messagesSlice";

import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../service/messages/getMessages";
import { sendMessage } from "../service/messages/sendMessage";

const useMessages = () => {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state?.conversation?.selectedConversation
  );
  const accessToken = useSelector((state) => state?.user?.accessToken);

  //   Get the messages
  const getConversationMessages = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      dispatch(setMessagesLoading());
      const response = await getMessages(selectedConversation?.id, headers);
      if (response?.status === 200) {
        dispatch(setMessages(response?.data?.data?.messages));
      }
    } catch (error) {
      dispatch(setMessagesError(error));
      dispatch(setMessages([]));
    }
  };

  // Send the message
  const sendConversationMessage = async (data) => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await sendMessage(
        selectedConversation?.id,
        data,
        headers
      );
      if (response?.status === 200) {
        await getConversationMessages();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return { getConversationMessages, sendConversationMessage };
};

export default useMessages;
