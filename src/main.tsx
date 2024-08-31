import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.tsx'
import './index.css'
import { ConfigProvider, Modal } from "antd";
import Router from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(

  <ConfigProvider direction="rtl">
    <Router />
  </ConfigProvider>
);