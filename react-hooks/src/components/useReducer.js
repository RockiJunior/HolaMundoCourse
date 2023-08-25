import { useReducer, useState } from 'react';

//const state = { counter: 0 };
//const action = { type: 'INCREMENT', payload: 1 };
const initialState = {
	counter: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { counter: state.counter + 1 };
		case 'DECREMENT':
			return { counter: state.counter - 1 };
		case 'SET': {
			return { counter: action.payload };
		}
		default:
			return state;
	}
};

export const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [value, setValue] = useState(0);

	return (
		<div>
			Counter: {state.counter}
			<input value={value} onChange={(e) => setValue(e.target.value)} />
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
			<button onClick={() => dispatch({ type: 'SET', payload: value })}>
				SET
			</button>
		</div>
	);
};
