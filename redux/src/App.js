import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from './components/TodoItem';
import { selectTodos } from './utils/selectTodos';
import { selectStatus } from './utils/selectStatus';
import { setFilter } from './redux/generalActions';
import { fetchTodos } from './utils/fetchTodos';

export const App = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const todos = useSelector(selectTodos);
	const status = useSelector(selectStatus);
 
	const submit = (e) => {
		e.preventDefault();

		if (!value.trim()) {
			return;
		}
		const id = Math.random().toString(36);
		const todo = {
			id,
			title: value,
			completed: false,
		};
		dispatch({
			type: 'todo/add',
			payload: todo,
		});
		setValue('');
	};

	if (status.loading === 'pending') {
		return <p>Loading...</p>;
	}
	if (status.loading === 'rejected') {
		return <p>{status.error}</p>;
	}

	return (
		<div>
			<form onSubmit={submit}>
				<input
					type="text"
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
				<button onClick={() => dispatch(setFilter('all'))}>
					Mostrar todos
				</button>
				<button onClick={() => dispatch(setFilter('completed'))}>
					Completados
				</button>
				<button onClick={() => dispatch(setFilter('incompleted'))}>
					Incompletos
				</button>
				<button
					onClick={() => {
						dispatch(fetchTodos());
					}}
				>
					Fetch
				</button>
				<ul>
					{todos?.map((todo) => (
						<TodoItem key={todo.id} todo={todo} />
					))}
				</ul>
			</form>
		</div>
	);
};
