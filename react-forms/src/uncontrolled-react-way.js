import { useRef } from 'react';

export const App = () => {
	const input = useRef();
	const file = useRef();

	const submit = () => {
		// console.log(input.current.value); // => asi podemos acceder a los valores
		console.log(file.current.files[0]); // asi accedemos las propiedades del archivo
		const form = new FormData();
		form.append('file', file.current.files[0]);
		form.append('field', file.current.value);

		fetch('http://localhost:3000', { body: form });
	};

	return (
		<div>
			<div>
				<span>Lala</span>
				<input type="text" name="field" ref={input} />
				<input type="file" ref={file} />
			</div>
			<input type="submit" name="Send" onClick={submit} />
		</div>
	);
};
