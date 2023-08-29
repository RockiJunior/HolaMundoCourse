import { useFormik } from 'formik';

export const App = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

  console.log()

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<label>Name</label>
				<input
					name="name"
					type="text"
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
				<label>LastName</label>
				<input
					name="lastName"
					type="text"
					onChange={formik.handleChange}
					value={formik.values.lastName}
				/>
				<label>Email</label>
				<input
					name="email"
					type="email"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<button type='submit'>Send</button>
			</form>
		</div>
	);
};
