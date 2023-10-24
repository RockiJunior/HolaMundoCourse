import { Route, Link, useLocation, Routes } from 'react-router-dom';

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

export const App = () => {
	const query = useQuery();
	console.log(query.get('name'));

	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Inicio</Link>
					</li>
					<li>
						<Link to="/chanchitofeliz">Chanchito Feliz</Link>
					</li>
				</ul>
			</nav>
			<section>
				<Routes>
					<Route exact path="/" element={<h1>Inicio</h1>} />
					<Route path="/chanchitofeliz" element={<h1>Chanchito Feliz</h1>} />
					<Route exact path="*" element={<h1>404: Route not founded</h1>} />
				</Routes>
			</section>
		</div>
	);
};
