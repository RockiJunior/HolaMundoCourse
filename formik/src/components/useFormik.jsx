import { useFormik } from 'formik';

export const App = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			lastName: '',
			email: '',
		},
		validate: (values) => {
			const errors = {};
			// name error
			if (!values.name) {
				errors.name = 'Required';
			} else if (values.name.length < 5) {
				errors.name = 'Name is to short!';
			}
			// lastName error
			if (!values.lastName) {
				errors.lastName = 'Required';
			} else if (values.lastName.length < 5) {
				errors.lastName = 'Last Name is to short!';
			}
			// email error
			if (!values.email) {
				errors.email = 'Required';
			} else if (values.email.length < 5) {
				errors.email = 'Email is to short!';
			}
			return errors;
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<label>Name</label>
				<input type="text" {...formik.getFieldProps('name')} />
				<br />
				{formik.touched.name && formik.errors.name ? (
					<div>{formik.errors.name}</div>
				) : null}

				<label>LastName</label>
				<input type="text" {...formik.getFieldProps('lastName')} />
				<br />
				{formik.touched.lastName && formik.errors.lastName ? (
					<div>{formik.errors.lastName}</div>
				) : null}

				<label>Email</label>
				<input type="email" {...formik.getFieldProps('email')} />
				<br />
				{formik.touched.email && formik.errors.email ? (
					<div>{formik.errors.email}</div>
				) : null}
				<button type="submit">Send</button>
			</form>
		</div>
	);
};
