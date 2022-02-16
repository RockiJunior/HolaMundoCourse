import Button from './components/Button.jsx';

const arr = [ 
    'chanchito feliz',
    'chanchito triste',
    'chanchito emocionado'
];

const App = () => {
	const miConstante = false;
	if (miConstante) {
		return <p>Mi constante dio True</p>;
	}
	return (
		<div>
			<h1 onClick={(e) => console.log(e, 'click')}>Hola Mundo</h1>
            {arr.map((el, i )=> <p key={i}>{el}</p>)}
            <Button onClick={() => console.log('clickeado')}>Enviar</Button>
		</div>
	);
};

export default App;
