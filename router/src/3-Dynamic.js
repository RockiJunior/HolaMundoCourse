import {
	Route,
	Link,
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
					<Link to={'/portfolio/1'}>Proyecto 1</Link>
				</li>
				<li>
					<Link to={'/portfolio/2'}>Proyecto 2</Link>
				</li>
			</ul>
		</div>
	);
};

export const App = () => {
	return (
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
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/portfolio/:projectId" element={<Project />} />
				</Routes>
			</section>
		</div>
	);
};
