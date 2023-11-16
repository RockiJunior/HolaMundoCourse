import { useDispatch } from 'react-redux';
import { setComplete } from '../redux/generalActions';

export const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	return (
		<li
			style={{
				textDecoration: todo.completed ? 'line-through' : 'none',
				cursor: 'pointer',
			}}
			onClick={() => dispatch(setComplete(todo))}
		>
			{todo.title}
		</li>
	);
};
