import { useField } from 'formik';

export const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className='control'>
			<label className="label" htmlFor={field.name}>
				{label}
			</label>
			<input className="input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};
