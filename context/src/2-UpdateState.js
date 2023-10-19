import { createContext, useContext, useState } from 'react';

const Context = createContext({
	valor: false,
	toggle: () => {},
});

const Provider = ({ children }) => {
	const [valor, setValor] = useState(false);
	const value = {
		valor,
		toggle: () => {
			setValor(!valor);
		},
	};
	return <Context.Provider value={value}>{children}</Context.Provider>;
};

const Component = () => {
	const { valor, toggle } = useContext(Context);
	return (
		<div>
			<p>{valor ? 'True' : 'False '}</p>
			<button onClick={toggle}>Toggle</button>
		</div>
	);
};

export const App = () => {
	return (
		<Provider>
			<Component></Component>
		</Provider>
	);
};
