import {
  setSelectedConversation,
  setMessages,

  // For conversations to load
  setConversationsLoading,
  setConversations,
  setConversationsError,
} from "../store/slices/conversationSlice";
import { useDispatch, useSelector } from "react-redux";

import { getConversation } from "../service/conversation/getConversation";

const useConversation = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state?.user?.accessToken);

  // Set the selected conversation
  const setConversation = (conversation) => {
    dispatch(setSelectedConversation(conversation));
  };

  //   To get the conversations
  const getConversations = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      dispatch(setConversationsLoading());
      const response = await getConversation(headers);
      if (response?.status === 200) {
        dispatch(setConversations(response.data.data));
        dispatch(setConversationsError(null));
      }
    } catch (error) {
      dispatch(setConversationsError(error));
    }
  };

  return { getConversations, setConversation };
};

export default useConversation;
