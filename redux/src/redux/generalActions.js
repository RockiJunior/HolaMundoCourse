export const setPending = () => {
	return {
		type: 'todos/pending',
	};
};

export const setFullFilled = (payload) => ({
	type: 'todos/fullfilled',
	payload,
});

export const setError = (error) => ({
	type: 'todos/error',
	error: error.message,
});

export const setComplete = (todo) => ({
	type: 'todo/completed',
	payload: todo,
});

export const setFilter = (payload) => ({
	type: 'filter/set',
	payload,
});
