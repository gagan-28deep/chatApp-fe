import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import SocketContextProvider from "./context/socketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        {/* <SocketContextProvider> */}
        <App />
        {/* </SocketContextProvider> */}
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
