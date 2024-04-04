import { useState, useEffect } from "react";

function Filtre({ setProducts }) {
	const [filter, setFilter] = useState([]);

	async function fetchFilter() {
		const response = await fetch("http://localhost:3001/products");
		const data = await response.json();
		setFilter(data);
	}

	useEffect(() => {
		fetchFilter();
	}, []);

	const categories = filter.map((product) => product.category);
	const uniqueCategories = [...new Set(categories)];

	function handleFilterChange(event) {
		const selectedCategory = event.target.value;
		if (selectedCategory === "") {
			setProducts(filter);
		} else {
			const filteredProducts = filter.filter(
				(product) => product.category === selectedCategory
			);
			setProducts(filteredProducts);
		}
	}

	return (
		<select name="filter" id="filter" onChange={handleFilterChange}>
			<option value="">---</option>
			{uniqueCategories.map((category) => (
				<option key={category} value={category}>
					{category}
				</option>
			))}
		</select>
	);
}

export default Filtre;
