import { useState } from 'react';

const useCounter = (initialState) => {
	const [counter, setCounter] = useState(initialState);
	const increment = () => {
		setCounter(counter + 1);
	};
	return [counter, increment];
};

export const App = () => {
	const [counter, increment] = useCounter(0);

	return (
		<div>
			Contador: {counter}
			<button onClick={increment}>Incrementar</button>
		</div>
	);
};
