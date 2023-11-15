import { useDispatch } from 'react-redux';

export const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	return (
		<li
			style={{
				textDecoration: todo.completed ? 'line-through' : 'none',
				cursor: 'pointer',
			}}
			onClick={() =>
				dispatch({
					type: 'todo/completed',
					payload: todo,
				})
			}
		>
			{todo.title}
		</li>
	);
};
