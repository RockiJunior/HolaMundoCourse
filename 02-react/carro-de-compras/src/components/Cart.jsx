import { Component } from 'react';
import { BubbleAlert } from './BubbleAlert';
import { CarsDetails } from './CarsDetails';

const styles = {
	button: {
		backgroundColor: '#359A2C',
		color: '#fff',
		border: 'none',
		borderRadius: '15px',
		padding: '15px',
		cursor: 'pointer',
	},
	bubble: {
		position: 'relative',
		left: 12,
		top: '20px',
	},
};

export class Cart extends Component {
	render() {
		const { cart, isCartVisible, showCart } = this.props;
		const quantity = cart.reduce((acc, el) => acc + el.quantity, 0);
		return (
			<div>
				<span style={styles.bubble}>
					{quantity !== 0 ? <BubbleAlert value={quantity} /> : null}
				</span>
				<button onClick={showCart} style={styles.button}>
					Cart
				</button>
				{isCartVisible ? <CarsDetails cart={cart} /> : null}
			</div>
		);
	}
}
