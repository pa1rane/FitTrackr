import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Pages/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
