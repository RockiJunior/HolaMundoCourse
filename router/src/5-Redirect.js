import { Route, Link, useNavigate, Routes } from 'react-router-dom';

const Portfolio = () => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/');
	};

	return (
		<div>
			<h1>Portfolio</h1>
			<button onClick={handleNavigate}>Redirigir a Home</button>
		</div>
	);
};

export const App = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Inicio</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>
				</ul>
			</nav>
			<section>
				<Routes>
					<Route exact path="/" element={<h1>Inicio</h1>} />

					<Route path="/portfolio" element={<Portfolio />} />
				</Routes>
			</section>
		</div>
	);
};
