import Cart from "./Cart";
function Carts({ carts }) {
	console.log(carts);
	return (
		<section>
			<h1>Vous panier contient:</h1>
			<ul className="products_list">
				{carts.map((product) => (
					<Cart key={product.id} product={product} />
				))}
			</ul>
		</section>
	);
}

export default Carts;
