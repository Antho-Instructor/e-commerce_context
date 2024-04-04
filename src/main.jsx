import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cart from "./components/Cart.jsx";
import Root from "./layout/Root.jsx";
import "./global.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
