import styles from './Container.module.css';

const { container } = styles;

export const Container = ({ children }) => {
	return <div className={container}>{children}</div>;
};
