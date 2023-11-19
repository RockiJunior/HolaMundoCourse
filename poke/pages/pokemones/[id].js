import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Pokemon = ({ data }) => {
	// si la fallback: 'blocking' en getStaticPaths, no es necesario el if..ya que solo espera hasta que se retorne
	// la data del servidor

	// osea si fallback: true, entonces si es necesario el if de aqui abajo
	const router = useRouter();
	if (router.isFallback) {
		return <div>Cargando...</div>;
	}

	return (
		<div>
			<h1>
				{data.name} número #{data.id}
			</h1>
			<Image src={data?.sprites?.front_default} width={400} height={400} />
			<Link href="/">Volver al Inicio</Link>
		</div>
	);
};

export const getStaticPaths = async () => {
	const paths = [{ params: { id: '1' } }, { params: { id: '2' } }];

	return {
		paths,
		fallback: true,
		// fallback: 'blocking',
	};
};

export const getStaticProps = async ({ params }) => {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${Number(params.id.split('id=')[1])}`
	);
	const data = await response.json();
	return {
		props: {
			data,
		},
	};
};

// export const getServerSideProps = async ({ params }) => {
// 	const response = await fetch(
// 		`https://pokeapi.co/api/v2/pokemon/${Number(params.id.split('id=')[1])}`
// 	);
// 	const data = await response.json();
// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// };

export default Pokemon;
