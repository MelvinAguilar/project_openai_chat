import React from "react";
import ReactDOM from "react-dom/client";
import ToastContainer from "./components/ToastContainer/ToastContainer";
import App from "./App";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
