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
import { logout } from "../service/user/logout";

const useUser = () => {
  const accessToken = useSelector((state) => state?.user);
  console.log("accessToken", accessToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // User signin
  const handleSignIn = async (data) => {
    try {
      dispatch(setUserLoading());
      const response = await signin(data);
      if (response.status === 200) {
        dispatch(setUser(response.data.data));
        dispatch(setAccessToken(response.data.data.accessToken));
        dispatch(setRefreshToken(response.data.data.refreshToken));
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

  // User logout
  const handleLogout = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await logout(headers);
      if (response?.status === 200) {
        dispatch(setUser(null));
        dispatch(setAccessToken(null));
        dispatch(setRefreshToken(null));
        removeStorage("accessToken");
        removeStorage("refreshToken");
        removeStorage("user");
        showToast(response.data.message, "success");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSignIn,
    handleLogout,
  };
};
export default useUser;
