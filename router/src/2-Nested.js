import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
};

const Portfolio = () => {
	return (
		<div>
			<h1>Portfolio</h1>
			<ul>
				<li>
					<Link to={'/portfolio/project-1'}>Proyecto 1</Link>
				</li>
				<li>
					<Link to={'/portfolio/project-2'}>Proyecto 2</Link>
				</li>
			</ul>
		</div>
	);
};

export const App = () => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/portfolio">Portfolio</Link>
						</li>
					</ul>
				</nav>
				<section>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/portfolio" element={<Portfolio />} />
						<Route path="/portfolio/project-1" element={<h1>PORTFOLIO 1</h1>} />
						<Route path="/portfolio/project-2" element={<h1>PORTFOLIO 2</h1>} />
					</Routes>
				</section>
			</div>
		</Router>
	);
};
