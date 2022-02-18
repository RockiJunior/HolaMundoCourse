import { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);
		console.log('constructor', props); // el constructor se ejecuta antes que el render (1)
	}

    componentDidMount(){
        // el componentDidMount se ejecuta despues que el render (3)
        console.log('componentDidMount', )
    }

    componentDidUpdate(prevProps, prevState){
        // el componentDidUpdate se ejecuta despues que el render una vez que 
        // se actualize el componente; ejemplo en el button, {prop: 1} (4)
       console.log('componentDidUpdate', prevProps, prevState);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount', this.props, this.state );
    }

	render() {
        // el render se ejecuta despues que el constructor (2)
		console.log('ejecutando metodo render de button');
        return(
            <button onClick={()=> this.setState({prop: 1})}>
                Enviar
            </button>
        );
	}
}

class App extends Component {
	state = {
		valor: 3
	};

	render() {
		console.log(this.state);
		return (
			<div>
				<p>Hola Mundo</p>
				{this.state.valor === 3 ? <Button chanchito='feliz' /> : null}
				<button className={`${this.state.valor}`} onClick={() => this.setState({ valor: 2 })}>
					Enviar en App
				</button>              
            </div>
		);
	}
}

export default App;
