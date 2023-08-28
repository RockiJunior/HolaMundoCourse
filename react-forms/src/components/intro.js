export const App = () => {
	const submit = (e) => {
		e.preventDefault();
		// esto captura los datos del formulario, el nombre y el campo:
		// console.log(Array.from(new FormData(e.target)));

		// Esto convierte el valor de los arrays de arrays, en objetos.
    // const data = Array.from(new FormData(e.target));
		// console.log(Object.entry(data));
		// example: FormData : [[ name: 'asdasd', value: 'asdasd']] => { name: 'asdasd', value: 'asdasd' }
	};

	return (
		<form onSubmit={submit}>
			<div>
				<span></span>
				<input name="campo" />
			</div>
			<input name="campo-2" />
			<input type="submit" value="Send" />
		</form>
	);
};
