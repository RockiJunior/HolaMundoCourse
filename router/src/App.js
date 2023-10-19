import { BrowserRouter as Router, Route, Link, Routes, useMatch, useParams } from 'react-router-dom';

const Project = () => {
    const match = useMatch()
    const { project_id } = match.params;
    const params = useParams();
	return (
		<div>
			<h1>Project {project_id}</h1>
		</div>
	);
};

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
};

const Portfolio = () => {
    const match = useMatch();
    
	return (
		<div>
			<h1>Portfolio</h1>
			<ul>
				<li>
					<Link to={`/portfolio/project-1`}>Proyecto 1</Link>
				</li>
				<li>
					<Link to={`/portfolio/project-2`}>Proyecto 2</Link>
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
						<Route
							path="/portfolio/:project_id"
							element={<Project/>}
						/>
					</Routes>
				</section>
			</div>
		</Router>
	);
};
