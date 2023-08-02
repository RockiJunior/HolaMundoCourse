import { Component } from 'react';
import { Product } from './Product';

const styles = {
	products: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
};

export class Products extends Component {
	render() {
		const { products, addToCart } = this.props;

		return (
			<div style={styles.products}>
				{products.map((product) => {
					return (
						<Product
							key={product.name}
							addToCart={addToCart}
							product={product}
						/>
					);
				})}
			</div>
		);
	}
}
