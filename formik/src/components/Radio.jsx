import { useField } from 'formik';

export const Radio = ({ label, ...props }) => {
	const [field] = useField({ ...props, type: 'radio' });

	return (
		<>
			<label>
				<input type="radio" {...field} {...props} />
				{label}
			</label>
		</>
	);
};
