import { createContext, useContext } from 'react';

const ContextDefault = createContext('valor por defecto');
const Context2 = createContext('valor por defecto 2');

const DefaultProvider = ({ children }) => {
	return (
		<ContextDefault.Provider value={'mi valor'}>
			{children}
		</ContextDefault.Provider>
	);
};

const Contenido = () => {
	const ctx = useContext(ContextDefault);
	return <div>{ctx}</div>;
};

const Contenido2 = () => {
	const ctx = useContext(Context2);
	return <div>{ctx}</div>;
};

export const App = () => {
	return (
		// cuando no viene un provider, le coloca el valor por defecto, osea, 'valor por defecto' que esta arriba
		<DefaultProvider>
			<Contenido />
			<Contenido2 />
		</DefaultProvider>
	);
};
