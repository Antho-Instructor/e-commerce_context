import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";

import Root from "./layout/Root.jsx";
import NotFound from "./pages/NotFound.jsx";
import Products from "./components/Products";
import Carts from "./components/Carts.jsx";

function App() {
	const [carts, setCarts] = useState([]);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			errorElement: <NotFound />,
			children: [
				{
					path: "/",
					element: <Products carts={carts} setCarts={setCarts} />,
				},
				{
					path: "/cart",
					element: <Carts carts={carts} />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
