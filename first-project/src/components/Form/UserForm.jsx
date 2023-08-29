import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import { useForm } from '../../hooks/useForm';


export const UserForm = ({ submit }) => {
	const [form, handleChange, reset] = useForm({
		name: '',
		lastName: '',
		email: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		submit(form);
		reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				name="name"
				value={form.name}
				label="Name"
				onChange={handleChange}
				placeholder="name"
			/>
			<Input
				name="lastName"
				value={form.lastName}
				label="Last Name"
				onChange={handleChange}
				placeholder="lastName"
			/>
			<Input
				name="email"
				value={form.email}
				label="Email"
				onChange={handleChange}
				placeholder="email"
			/>
			<Button>Send</Button>
		</form>
	);
};
