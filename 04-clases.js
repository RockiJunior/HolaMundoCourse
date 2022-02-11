// Declaracion de una clase:
class Rectangulo {}

// Expresion de clase:

// const Rectangulo = class R {};

// console.log(Cuadrado); // Si trataramos de imprimir una funcion de clase, antes de
// ser declarada, también saldría impreso en consola. Esto es debido a que la funcion,
// siempre, se va a declarar al comienzo del archivo javascript. Esto se conoce como Hoisting
// el hoisting sucede cuando se declaran variables con var, o funciones con Funtion:

// function Cuadrado() {}
// console.log(Cuadrado, Rectangulo); // log: [Function: Cuadrado] [class Rectangulo]
// const r = new Rectangulo();

class Chancho {
	// estado = 'feliz'; // podemos asignar propiedades por defecto a una clase
	propiedad = 'mi propiedad';
	constructor(estado) {
		// aqui se le debe pasar el parametro estado al constructor
		// console.log(`Hola, soy un chancho ${this.estado}`); // podemos acceder a las propiedades por defecto clase
		// console.log(`Hola, soy un chancho ${estado}`);
		this.estado = estado;
	}

	hablar() {
		console.log(`Hola, soy un chancho ${this.estado}, y este es el metodo hablar`);
	}
}

const feliz = new Chancho('feliz');
// feliz.hablar();
// aqui no sale el metodo porque los metodos se guardan en el prototipo de la clase
console.log(feliz); // log: Chancho { propiedad: 'mi propiedad', estado: 'feliz' }
// para que salga el metodo de la clase
console.log(feliz.__proto__.hablar)

