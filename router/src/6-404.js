import { Route, Link, useNavigate, Routes } from 'react-router-dom';

export const App = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Inicio</Link>
					</li>
				</ul>
			</nav>
			<section>
				<Routes>
					<Route exact path="/" element={<h1>Inicio</h1>} />
					<Route exact path="*" element={<h1>404: Route not founded</h1>} />
                </Routes>
			</section>
		</div>
	);
};
