import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ApplicationRoutes } from "./routes/ApplicationRoutes";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ApplicationRoutes />
		</Provider>
	</React.StrictMode>
);

reportWebVitals();