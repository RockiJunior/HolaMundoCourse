import { useField } from 'formik';

export const Select = ({ label, ...props }) => {
	const [field, meta] = useField(props);

    console.log(field)
	return (
		<div>
			<label>{label}</label>
			<select {...field} {...props} />
			{meta.touched && meta.error ? <div>{meta.error}</div> : null}
		</div>
	);
};
