import { Component } from 'react';

class Input extends Component {
	render() {
		return <input
        value={this.props.value} 
        onChange={this.props.onChange}
        />;
	}
}

class App extends Component {
	state = {
		nombre: '',
		apellido: ''
	};

    // ESTO ES LA EL BIND (debemos crear un constructor, y apuntar 
    // el contexto de this a el componente de App) ↓↓↓↓
    // Aqui el contexto del this es el componente App
    constructor(props){
        super(props)
        this.updateNombre = this.updateNombre.bind(this); 
        // esta forma de bindear, funciona con el constructor
        // y los metodos creados en el componente App, como esta abajo
    }

    // ESTO ES LA FAT ARROW FUNCTION ↓↓↓↓
    // updateNombre = (v) =>{
    //     this.updateStateValues('nombre', v.target.value);
    // }
    
    // ESTO ES PASANDOLE UN ARGUMENTO A LA FUNCION (
    // esto seria lo mas simple para arreglar los contextos 
    // del this) ↓↓↓↓
  
    // updateNombre = (v) =>{
    //     this.updateStateValues('nombre', v.target.value);
    // }

    updateNombre(v) {
        this.updateStateValues('nombre', v.target.value);
    }

	updateStateValues = (props, value) => {
		this.setState({
			[props]: value // [props] es una propiedad dinamica
		});
	};

	render() {
		return (
			<p>
				Nombre Completo: {
                `${this.state.nombre}
                 ${this.state.apellido}`
                }
                {/* ESTO ES LA FAT ARROW FUNCTION ↓↓↓↓*/}

				{/* <Input 
                value={this.state.nombre}
                onChange={this.updateNombre()} /> */} 

                {/* ESTO ES PASANDOLE UN ARGUMENTO AL METODO ↓↓↓↓*/}
                {/* <Input 
                value={this.state.nombre}
                onChange={(arg)=>this.updateNombre(arg)} /> */}

                {/* ESTO ES CON EL BIND() ↓↓↓↓ */}
                
                <Input 
                value={this.state.nombre}
                onChange={this.updateNombre} />
				
                <Input 
                value={this.state.apellido}
                onChange={(e) => this.updateStateValues('apellido', e.target.value)} />
			</p>
		);
	}
}

export default App;
