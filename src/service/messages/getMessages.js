import { defaultSecuredAxios } from "../DefaultSecuredAxiosInstance";

export const getMessages = async (id, headers) => {
  return await defaultSecuredAxios.get(`/messages/get/${id}`, { headers });
};
