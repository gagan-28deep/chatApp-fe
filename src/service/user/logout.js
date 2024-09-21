import { defaultSecuredAxios } from "../DefaultSecuredAxiosInstance";

export const logout = async (headers) => {
  return await defaultSecuredAxios.post("/auth/logout", {}, { headers });
};
