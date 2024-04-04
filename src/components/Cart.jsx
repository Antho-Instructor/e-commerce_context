function Cart({ product }) {
	return (
		<li className="product_detail">
			<img src={product.image} alt={product.name} />
			<h3>{product.name}</h3>
			<p className="product_detail_desc">{product.description}</p>
			<p>{product.price} €</p>
		</li>
	);
}

export default Cart;
