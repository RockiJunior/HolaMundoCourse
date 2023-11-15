import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

export const reducer = (state = 0, action) => {
  console.log(action)
	switch (action.type) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		case 'set':
			return action.payload;
		default:
			return state;
	}
};

export const App = () => {
	const [valor, setValor] = useState('');
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	const set = () => {
		dispatch({ type: 'set', payload: valor });
		setValor('');
	};

	return (
		<div>
			<p>Contador: {state}</p>
			<button onClick={() => dispatch({ type: 'increment' })}>
				Incrementar
			</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>
				Decrementar
			</button>
			<button onClick={set}>Set</button>
			<input value={valor} onChange={(e) => setValor(Number(e.target.value))} />
		</div>
	);
};
