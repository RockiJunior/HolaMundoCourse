import { filterReducer } from './filterReducer/filterReducer';
import { todosReducer } from './todosReducer/todosReducer';

const initialState = {
	entities: [],
	filter: 'all',
};

export const GeneralReducer = (state = initialState, action) => {
	return {
		entities: todosReducer(state.entities, action),
		filter: filterReducer(state.filter, action),
	};
};