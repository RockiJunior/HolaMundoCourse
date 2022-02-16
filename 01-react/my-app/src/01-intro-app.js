// import './App.css';
import './main.css';

const estilo = ({bg = '#222'}) => ({
	backgroundColor: bg,
	color: '#fff',
	padding: '10px 15px',
	margin: '10px 15px'
});

const estilo2 = {
	boxShadow: '0 5px 3px rgba(0, 0, 0, 0.5)'
};

const Li = ({ children }) => {
	return (
		// se puede cambiar el color de bg que le pasamos a la funcion estilo, pasandole
		// el valor nuevamente('#057'). Si no se le llega a pasar un color, ya lo toma por defecto
		// al que le pasamos en la funcion
		// <li style={estilo('#057')} className="clase-li">{children}</li> // para el caso de solo estilo

		// <li style={{ ...estilo2, ...estilo({bg: '#333'}) }} className="clase-li">
		// 	{children}
		// </li> //a esto se le llama inline style
		<li className="clase-li">
			{children}
		</li> //a esto se le llama inline style
	);
};

const App = () => {
	const valor = 'feliz';
	return (
		<ul style={estilo({bg: '#750'})} className="class-css">
			<Li estado={valor}>Valor de Li</Li>
		</ul>
	);
};

export default App;
