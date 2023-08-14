import { useState } from 'react';

export const App = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			Contador: {counter}
			<button onClick={() => setCounter(counter + 1)}>Incrementar</button>
		</div>
	);
};
