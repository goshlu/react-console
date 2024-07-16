import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "@/styles/common.less";
import "@/styles/reset.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
