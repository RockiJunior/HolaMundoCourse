import { useState } from 'react';

export const useForm = (initialState) => {
	const [form, setForm] = useState(initialState);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const reset = () => {
		setForm(initialState);
	};

	return [form, handleChange, reset];
};
