import { Component } from 'react';

const styles = {
	alert: {
		backgroundColor: '#E9725A',
	},
};

export class BubbleAlert extends Component {
	render() {
		return <span style={styles.alert}>5</span>;
	}
}
