import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Root() {
	return (
		<>
			<Navbar />
			<main className="container">
				<h1>Bienvenue sur mon site e-commerce!</h1>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default Root;
