import { useRef, useState } from 'react';

export const App = () => {
	const [value, setValue] = useState({
		normal: '',
		text: '',
		select: '',
		checked: false,
        state: 'happy',
	});

	const handleChange = ({ target }) => {
		// una forma de no perder el estado anterior...
		// setValue({
		//     ...value,
		//     [e.target.name]: e.target.value,
		// })
		// otra forma de no perder el estado anterior...
		// (cuando los inputs son de tipo checkbox, el target pasa a ser checked!!!)
		setValue((state) => ({
			...state,
			[target.name]: target.type === 'checkbox' ? target.checked : target.value,
		}));
	};
	console.log(value);
	return (
		<div>
			{value.length < 5 ? (
				<span>Minimal Length must be more than 5</span>
			) : null}
			<input
				name="normal"
				type="text"
				value={value.normal}
				onChange={handleChange}
			/>
			<textarea name="text" value={value.text} onChange={handleChange} />

			<select value={value.select} name="select" onChange={handleChange}>
				<option value="">-- Please Select --</option>
				<option value="Happy Pig">Happy Pig</option>
				<option value="Little Happy Pig">Little Happy Pig</option>
				<option value="Little Sad Pig">Little Sad Pig</option>
				<option value="Phillip">Phillip</option>
			</select>

			<input
				type="checkbox"
				name="check"
				onChange={handleChange}
				checked={value.checked}
			/>

			<div>
				<label>Pig</label>
				<input
					type="radio"
					value="happy"
					name="state"
					onChange={handleChange}
					checked={value.state === 'happy'}
				/>
				Happy
				<input
					type="radio"
					value="sad"
					name="state"
					onChange={handleChange}
					checked={value.state === 'sad'}
				/>
				Sad
				<input
					type="radio"
					value="phillip"
					name="state"
					onChange={handleChange}
					checked={value.state === 'phillip'}
				/>
				Phillip
			</div>
		</div>
	);
};
