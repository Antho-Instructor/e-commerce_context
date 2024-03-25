import { useState, useEffect } from "react";
import Product from "./Product";

function Products() {
	const [products, setProducts] = useState([]);

	async function fetchProducts() {
		const response = await fetch("http://localhost:3001/products");
		const data = await response.json();
		setProducts(data);
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<section>
			<h2>Tous nos produits</h2>
			<ul className="products_list">
				{products.map((product) => (
					<Product key={product.key} {...product} />
				))}
			</ul>
		</section>
	);
}

export default Products;
