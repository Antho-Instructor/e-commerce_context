import { useState, useEffect } from "react";
import Product from "./Product";
import Filtre from "./Filtre";

function Products({ carts, setCarts }) {
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
			<Filtre setProducts={setProducts} />
			<ul className="products_list">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						carts={carts}
						setCarts={setCarts}
					/>
				))}
			</ul>
		</section>
	);
}

export default Products;
