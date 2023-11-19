import Link from 'next/link';

const Pokemon = ({ pokemon }) => {
	const id = pokemon.url
		.split('/')
		.filter((e) => e) // con esto elimino los elementos vacios
		.pop();

	return (
		<li>
			<Link href={`pokemones/id=${id}`}>
				<p>{pokemon.name}</p>
			</Link>
		</li>
	);
};

const Pokemones = ({ pokemones }) => {
	return (
		<div>
			<h1>POKEMONES</h1>
			<ul>
				{pokemones.map((pokemon) => (
					<Pokemon key={pokemon.name} pokemon={pokemon} />
				))}
			</ul>
		</div>
	);
};

export const getStaticProps = async () => {
	const response = await fetch(
		'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
	);

	const data = await response.json();
	return {
		props: {
			pokemones: data.results,
		},
	};
};

export default Pokemones;
