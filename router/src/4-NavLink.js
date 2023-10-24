import {
	Route,
	Link,
	NavLink,
	Routes,
	useParams,
	useMatch,
	useMatches,
} from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
};

function Project() {
	const { projectId } = useParams();
	return <h1>Projecto {Number(projectId)}</h1>;
}

const Portfolio = () => {
	return (
		<div>
			<h1>Portfolio</h1>
			<ul>
				<li>
					<NavLink end to={'/portfolio/1'}>
						Proyecto 1
					</NavLink>
				</li>
				<li>
					<NavLink end to={'/portfolio/2'}>
						Proyecto 2
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export const App = () => {
	const isPortfolioActive = useMatch('/portfolio');
	console.log(isPortfolioActive);
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink end to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink end to="/portfolio">
							Portfolio
						</NavLink>
					</li>
				</ul>
			</nav>
			<section>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/portfolio/:projectId" element={<Project />} />
				</Routes>
			</section>
		</div>
	);
};
