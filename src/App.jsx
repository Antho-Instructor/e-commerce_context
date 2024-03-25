import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
	return (
		<>
			<Navbar />
			<main className="container">
				<h1>Bienvenue sur mon site e-commerce!</h1>
				<Products />
			</main>
			<Footer />
		</>
	);
}

export default App;
