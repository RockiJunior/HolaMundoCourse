import { setError, setFullFilled, setPending } from '../redux/generalActions';

export const fetchTodos = () => async (dispatch) => {
	dispatch(setPending());
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		const data = await response.json();

		const todos = data.slice(0, 10);
		dispatch(setFullFilled(todos));
	} catch (e) {
		dispatch(setError(e));
	}
};
