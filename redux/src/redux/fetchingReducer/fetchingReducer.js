const initialFetching = {
	loading: 'idle',
	error: null,
};

export const fetchingReducer = (state = initialFetching, action) => {
	switch (action.type) {
		case 'todos/pending': {
			return {
				...state,
				loading: 'pending',
			};
		}
		case 'todos/fullfilled': {
			return {
				...state,
				loading: 'succeeded',
			};
		}
		case 'todos/error': {
			return {
				error: action.error,
				loading: 'rejected',
			};
		}
		default: {
			return state;
		}
	}
};
