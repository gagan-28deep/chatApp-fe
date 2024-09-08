import {
  setUserLoading,
  setUser,
  setUserError,
  setAccessToken,
  setRefreshToken,
} from "../store/slices/userSlice";
import {
  setStorage,
  getStorage,
  removeStorage,
} from "../service/storageService";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../service/user/signin";

import { showToast } from "../utils/showToast";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // User signin
  const handleSignIn = async (data) => {
    try {
      dispatch(setUserLoading());
      const response = await signin(data);
      if (response.status === 200) {
        dispatch(setUser(response.data.data));
        setStorage("accessToken", response.data.data.accessToken);
        setStorage("refreshToken", response.data.data.refreshToken);
        setStorage("user", response.data.data);
        showToast(response.data.message, "success");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSignIn,
  };
};
export default useUser;
