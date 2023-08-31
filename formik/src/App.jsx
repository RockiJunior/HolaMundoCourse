import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextInput } from './components/TextInput';
import { CheckBox } from './components/CheckBox';
import { Select } from './components/Select';
import { Radio } from './components/Radio';

export const App = () => {
	const validate = (values) => {
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
		// radio error
		if (!values.radio) {
			errors.radio = 'Required';
		}
		return errors;
	};

	return (
		<Formik
			initialValues={{
				name: '',
				lastName: '',
				email: '',
				pig: '',
				radio: '',
			}}
			validate={validate}
			onSubmit={(values) => {
				console.log(values); // imprime los valores de los elementos html del formulario
			}}
		>
			<Form>
				<TextInput name="name" label="name" />
				<br />
				{/* Aqui abajo se muestra como podemos hacer para mostrar otros tipos de inputs y select-options */}
				{/* <Field name="name" as="textarea" className="input" /> */}
				{/* <Field name="name" as="select" className="input">
					<option value="chanchito feliz">Chanchito Feliz</option>
				</Field> */}
				<TextInput name="lastName" label="Last Name" />
				<br />
				<TextInput name="email" label="email" />
				<br />
				<Select name="pig" label="pig type">
					<option value="">Select Your Pig</option>
					<option value="felix">Feliz</option>
					<option value="happyPig">Happy Pig</option>
					<option value="sadPig">Sad Pig</option>
				</Select>
				<br />
				<CheckBox name="accept">Aceptar terminos y condiciones</CheckBox>
				<br />
				<Radio name="radio" label="First Pig" value="firstpig" />
				<Radio name="radio" label="Second Pig" value="secondpig" />
				<Radio name="radio" label="Third Pig" value="thirdpig" />
				<br />
				<ErrorMessage name="radio" />
				<button type="submit">Send</button>
			</Form>
		</Formik>
	);
};
