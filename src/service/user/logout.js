import { defaultSecuredAxios } from "../DefaultSecuredAxiosInstance";

export const logout = async (headers) => {
  console.log("headers", headers);
  return await defaultSecuredAxios.post("/auth/logout", {}, { headers });
};
