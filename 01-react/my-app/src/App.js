import './App.css';

const estilo = (bg = '#333') => ({
	backgroundColor: bg,
  	color: '#fff',
	padding: '10px 15px',
	margin: '10px 15px'
});

const Li = ({ children }) => {
	return (
    // se puede cambiar el color de bg que le pasamos a la funcion estilo, pasandole
    // el valor nuevamente('#057'). Si no se le llega a pasar un color, ya lo toma por defecto
    // al que le pasamos en la funcion
		<li style={estilo('#057')} className="clase-li"> 
			{children}
		</li>
	);
};

const App = () => {
	const valor = 'feliz';
	return (
		<ul classNem="clase-css">
			<Li estado={valor}>Valor de Li</Li>
		</ul>
	);
};

export default App;
