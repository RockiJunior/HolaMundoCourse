import { useEffect, useState } from 'react';

// Esta funcion puede ayudar a desuscribirse por ejemplo de un evento de webSocket. 

const useCounter = (initialState) => {
	const [counter, setCounter] = useState(initialState);
	const increment = () => {
		setCounter(counter + 1);
	};
	return [counter, increment];
};

const Interval = ({ counter }) => {
	useEffect(() => {
		const interval = setInterval(() => {
			console.log(counter);
		}, 1000);
		return () => clearInterval(interval);
	}, [counter]);
	return <p>Interval</p>;
};

export const App = () => {
	const [counter, increment] = useCounter(0);
	useEffect(() => {
		document.title = `useEffect: ${counter}`;
	}, [counter]);

	return (
		<div>
			Contador: {counter}
			<button onClick={increment}>Incrementar</button>
			<Interval counter={counter} />
		</div>
	);
};
