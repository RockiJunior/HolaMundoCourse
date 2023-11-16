import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer/filterReducer';
import { todosReducer } from './todosReducer/todosReducer';
import { fetchingReducer } from './fetchingReducer/fetchingReducer';

export const GeneralReducer = combineReducers({
	todos: combineReducers({
		entities: todosReducer,
		status: fetchingReducer,
	}),
	filter: filterReducer,
});
