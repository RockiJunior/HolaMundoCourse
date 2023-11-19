import { useRouter } from 'next/router';

const Description = () => {
	const router = useRouter();
	console.log({ router });
	return (
		<div>
			<p>Descripción de Pokemon</p>
		</div>
	);
};

export default Description;
