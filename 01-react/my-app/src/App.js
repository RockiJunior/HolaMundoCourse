import { Component } from 'react';


class Button extends Component {
    
    render(){
        console.log('ejecutand metodo render de button')
        return(
        <button>
            Enviar en Button
        </button>)
    }
}

class App extends Component {
	
    state= {
        valor: 3
    };

    render() {
		console.log(this.state);
        return (
			<div>
				<p>Hola Mundo</p>
               <Button/> 
				<button className={`${this.state.valor}`} onClick={() => this.setState({valor: 2})}>Enviar en App</button>
			</div>
		);
	}
}

export default App;
