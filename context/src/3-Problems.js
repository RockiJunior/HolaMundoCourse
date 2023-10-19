import { createContext, useContext, useState, memo, useCallback } from 'react';

const Context = createContext();

const CounterProvider = ({ children }) => {
	const [counter, setCounter] = useState(0);

	const increment = useCallback(() => {
		setCounter((x) => x + 1);
	}, []);

	const decrement = useCallback(() => {
		setCounter((x) => x - 1);
	}, []);

	return (
		<Context.Provider value={{ counter, increment, decrement }}>
			{children}
		</Context.Provider>
	);
};

const Incrementar = memo(() => {
	const { increment } = useContext(Context);

	return <button onClick={increment}>Increment</button>;
});

const Decrementar = memo(() => {
	const { decrement } = useContext(Context);

	return <button onClick={decrement}>Decrement</button>;
});

const Label = () => {
	const { counter } = useContext(Context);
	return <h1>{counter}</h1>;
};

export const App = () => {
	return (
		<CounterProvider>
			<Label />
			<Incrementar />
			<Decrementar />
		</CounterProvider>
	);
};
