import Link from 'next/link';
import Image from 'next/image';
import Coffee from '../public/coffee.png';

export default function Home() {
	return (
		<>
			<p>Home</p>
			<Link href="/chanchitos">Ir a Chanchitos</Link>
			{/* DOS FORMAS DISTINTAS DE UTILIZAR Y RENDERIZAR IMAGENES */}
			{/* <Image src="/coffee.png" layout='fill'/> */}
			<Image src={Coffee} width={400} height={400} />
		</>
	);
}
