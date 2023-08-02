import { Component } from 'react';
import { BubbleAlert } from './BubbleAlert';

const styles = {
	button: {
		backgroundColor: '#359A2C',
		color: '#fff',
		border: 'none',
		borderRadius: '15px',
		padding: '15px',
		cursor: 'pointer',
	},
	bubble: {},
};

export class Cart extends Component {
	render() {
		return (
			<div>
				<span style={styles.bubble}>
					<BubbleAlert />
				</span>
				<button style={styles.button}>Cart</button>
			</div>
		);
	}
}
