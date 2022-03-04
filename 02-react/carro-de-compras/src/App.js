import { Component } from 'react';
import Productos from './components/Productos.jsx';
import Layout from './components/Layout.jsx';


class App extends Component {
	state = {
		productos: [
			{
				name: 'Tomate',
				price: 1500,
				img: '/productos/tomate.jpg'
			},
			{
				name: 'Arbejas',
				price: 2500,
				img: '/productos/arbejas.jpg'
			},
			{
				name: 'Lechuga',
				price: 500,
				img: '/productos/lechuga.jpg'
			}
		]
	};

	render() {
		return (
			<div>
				<Layout>
				<Productos agregarAlCarro={() => console.log('No hace nada')} productos={this.state.productos} />
				<p>Hola Mundo</p>
				</Layout>
			</div>
		);
	}
}

export default App;
