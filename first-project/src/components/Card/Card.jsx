import styles from './Card.module.css';

const { card } = styles;

export const Card = ({ children }) => {
	return <div className={card}>{children}</div>;
};
