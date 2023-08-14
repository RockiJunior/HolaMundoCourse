import { Component } from 'react';

const styles = {
	carsDetails: {
		backgroundColor: '#fff',
		position: 'absolute',
		marginTop: '30',
		boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
		borderRadius: '5px',
		width: '300px',
		right: 50,
	},
	ul: {
		margin: 0,
		padding: 0,
	},
	products: {
		listStyleType: 'none',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '25px 20px',
		borderBottom: 'solid 1px #aaa',
	},
};

export class CarsDetails extends Component {
	render() {
		const { cart } = this.props;
		return (
			<div style={styles.carsDetails}>
				<ul style={styles.ul}>
					{cart.map((el) => (
						<li style={styles.products} key={el.name}>
							<img alt={el.name} src={el.img} width="50" height="32" />
							{el.name} <span>{el.quantity}</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
