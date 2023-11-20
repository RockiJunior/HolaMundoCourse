import { useState, useEffect } from 'react';
import Link from 'next/link';

const Pokemon = ({ pokemon }) => {
	const id = pokemon.url
		.split('/')
		.filter((e) => e) // con esto elimino los elementos vacios
		.pop();

	return (
		<li>
			<Link href={`/pokemones/id=${id}`}>
				<p>{pokemon.name}</p>
			</Link>
		</li>
	);
};

const Pokemones = () => {
	const [loading, setLoading] = useState(true);
	const [pokemones, setPokemones] = useState([]);

	useEffect(() => {
		const getPokemones = async () => {
			const response = await fetch(
				'https://pokeapi.co/api/v2/pokemon?limit=151'
			);
			const data = await response.json();
			setPokemones(data.results);
		};
		setLoading(false);
		getPokemones();
	}, []);
    
	return !loading ? (
		<div>
			<h1 data-testid="titulo">MI APP DE POKEMONES</h1>
			<ul>
				{pokemones.map((pokemon) => (
					<Pokemon key={pokemon.name} pokemon={pokemon} />
				))}
			</ul>
		</div>
	) : (
		<p>Cargando...</p>
	);
};

export default Pokemones;
