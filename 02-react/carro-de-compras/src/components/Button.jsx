import { Component } from 'react';

const styles = {
	button: {
		backgroundColor: '#0A283E',
		color: '#fff',
		padding: '15px, 20px',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
        
	},
};
export class Button extends Component {
	render() {
		return (
			<div>
				<button style={styles.button} {...this.props} />
			</div>
		);
	}
}
