export const selectTodos = (state) => {
	const {
		todos: { entities },
		filter,
	} = state;

	switch (filter) {
		case 'all':
			return entities;
		case 'completed':
			return entities.filter((todo) => todo.completed);
		case 'incompleted':
			return entities.filter((todo) => !todo.completed);
		default:
			return entities;
	}
};
