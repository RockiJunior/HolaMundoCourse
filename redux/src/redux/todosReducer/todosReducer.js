export const todosReducer = (state = [], action) => {
	switch (action.type) {
		case 'todo/add': {
			return state.concat({
				...action.payload,
			});
		}
		case 'todo/completed': {
			const newTodos = state.map((todo) => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			});
			return newTodos;
		}
		case 'todos/fullfilled': {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};
