import { Link } from "react-router-dom";
function NotFound() {
	return (
		<section className="notFound">
			<h1>404 - Page not found</h1>
			<p>Sorry, the page you are looking for does not exist.</p>
			<p>
				<Link to="/">Go back to the homepage</Link>
			</p>
		</section>
	);
}

export default NotFound;
