import { Component } from 'react';
import { Products } from './components/Products';
import { Layout } from './components/Layout';
import { Title } from './components/Title';
import { Navbar } from './components/Navbar';
class App extends Component {
	state = {
		products: [
			{
				name: 'Tomato',
				price: 1500,
				img: '/products/tomato.jpg',
			},
			{
				name: 'Pea',
				price: 1500,
				img: '/products/pea.jpg',
			},
			{
				name: 'Lettuce',
				price: 1500,
				img: '/products/lettuce.jpg',
			},
		],
	};

	render() {
		return (
			<div>
				<Navbar />
				<Layout>
					<Title />
					<Products
						addToCart={() => console.log('No Hace Nada')}
						products={this.state.products}
					/>
				</Layout>
			</div>
		);
	}
}

export default App;
