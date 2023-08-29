import styles from './Button.module.css';

const { button } = styles;

export const Button = ({ children }) => {
	return <button className={button}>{children}</button>;
};
