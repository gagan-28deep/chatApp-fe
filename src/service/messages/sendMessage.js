import {defaultSecuredAxios} from "../DefaultSecuredAxiosInstance"

export const sendMessage = async (id ,  data, headers) => {
    return await defaultSecuredAxios.post(`/messages/send/${id}`, {message : data}, { headers });
}