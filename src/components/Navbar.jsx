import { Link } from "react-router-dom";
function Navbar() {
	return (
		<nav className="navbar">
			<img src="https://picsum.photos/150/50" alt="logo" />
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>

				<li>
					<a href="!#">Contact</a>
				</li>
				<li>
					<Link to="/cart">🛒 Panier</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
