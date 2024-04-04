function Product({ product, carts, setCarts }) {
	return (
		<li className="product_detail">
			<img src={product.image} alt={product.name} />
			<h3>{product.name}</h3>
			<p className="product_detail_desc">{product.description}</p>
			<p>{product.price} €</p>
			<button
				onClick={() => {
					setCarts([...carts, product]);
				}}
			>
				Ajouter au panier
			</button>
		</li>
	);
}

export default Product;
