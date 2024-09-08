import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getStorage } from "./service/storageService.js";
import {
  setAccessToken,
  setRefreshToken,
  setUser,
} from "./store/slices/userSlice.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = getStorage("user");
    const accessToken = getStorage("accessToken");
    const refreshToken = getStorage("refreshToken");
    if (user && refreshToken && accessToken) {
      dispatch(setUser(user));
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
    }
  }, [dispatch]);
  const loggedInUser = useSelector((state) => state?.user?.user);
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={loggedInUser ? <Home /> : <Login />} />
        <Route path="/signup" element={!loggedInUser ? <SignUp /> : <Home />} />
        <Route path="/login" element={!loggedInUser ? <Login /> : <Home />} />
      </Routes>
    </div>
  );
}

export default App;
