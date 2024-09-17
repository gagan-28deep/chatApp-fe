import {
  setMessages,
  setMessagesLoading,
  setMessagesError,
} from "../store/slices/messagesSlice";

import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../service/messages/getMessages";

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
    }
  };

  return { getConversationMessages };
};

export default useMessages;
