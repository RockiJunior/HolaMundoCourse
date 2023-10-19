import { Component, createContext } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
	return <Context.Provider value="otro valor">{children}</Context.Provider>;
};

class Componente extends Component {
	// static contextType = Context;

	render() {
		console.log(this.context);

		return <div>Hola Mundo</div>;
	}
}

Componente.contextType = Context; // esto es lo mismo que: static contextType = Context; que esta arriba

export const App = () => {
	return (
		<Provider>
			<Componente />
            <Context.Consumer>
                {
                    value => <h1>{value}</h1>
                }
            </Context.Consumer>
		</Provider>
	);
};
