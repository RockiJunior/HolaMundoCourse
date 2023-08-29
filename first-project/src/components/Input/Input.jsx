import styles  from './Input.module.css';

const { field } = styles;

export const Input = ({ label, ...rest }) => {
	return (
		<div className={field}>
			<label>{label}</label>
			<input {...rest} />
		</div>
	);
};
