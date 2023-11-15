import { Children, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from './components/TodoItem';
import { selectTodos } from './utils/selectTodos';

export const App = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const todos = useSelector(selectTodos);

	console.log(todos)

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
				<button
					onClick={() =>
						dispatch({
							type: 'filter/set',
							payload: 'all',
						})
					}
				>
					Mostrar todos
				</button>
				<button
					onClick={() =>
						dispatch({
							type: 'filter/set',
							payload: 'completed',
						})
					}
				>
					Completados
				</button>
				<button
					onClick={() =>
						dispatch({
							type: 'filter/set',
							payload: 'incompleted',
						})
					}
				>
					Incompletos
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
