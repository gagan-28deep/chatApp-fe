import { defaultSecuredAxios } from "../DefaultSecuredAxiosInstance";

export const getConversation = async (headers) => {
  return await defaultSecuredAxios.get("/messages/conversations", { headers });
};
