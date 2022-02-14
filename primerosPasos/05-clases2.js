class Chancho {
	propiedad = 'mi propiedad';
    #hambre; // las propiedades privadas si o si tienen que estar declarados
    // y no se puede acceder a una propiedad privada de un objeto. 
    // pero los metodos si pueden acceder a las propiedades privadas
    static estatico = 42;
    // si quisieramos acceder a una propiedad desde un metodo estatico, debemos
    // definirla como static.

	constructor(estado = 'feliz', hambre = false) {
		this.estado = estado;
        this.#hambre = hambre;
	}

	hablar() {
		// console.log(`Este es el metodo hablar`);
        console.log(`Soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre': 'satifecho'}`);
    }

    static comer (){
        // console.log(this, 'comiendo'); // log: [class Chancho] comiendo
        
        // console.log(this.propiedad); // log: undefined
        //los metodos estaticos no pueden acceder
        // a las propiedades de la clase
        
        console.log(this.estatico, 'comiendo')
    }

}

// const feliz = new Chancho('feliz');
// feliz.hablar();

Chancho.comer();

