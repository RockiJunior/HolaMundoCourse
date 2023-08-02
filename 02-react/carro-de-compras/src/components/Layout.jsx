import { Component } from 'react';

const styles = {
	layout: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: '#fff',
		color: '#0A283E',
	},
	container: {
		width: '1200px',
	},
};

export class Layout extends Component {
	render() {
		return (
			<div style={styles.layout}>
				<div style={styles.container}>{this.props.children}</div>
			</div>
		);
	}
}
