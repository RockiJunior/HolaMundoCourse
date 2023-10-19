import { Switch, Route, Link } from 'react-router-dom';

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
				<Switch>
					<Route exact path="/">
						<h1>Inicio</h1>
					</Route>
					<Route path="/portfolio">
						<h1>Portfolio</h1>
					</Route>
				</Switch>
			</section>
		</div>
	);
};
