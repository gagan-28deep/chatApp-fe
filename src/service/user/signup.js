import { defaultSecuredAxios } from "../DefaultSecuredAxiosInstance";

export const signup = async (data) => {
    return await defaultSecuredAxios.post("/auth/signup", data);
}