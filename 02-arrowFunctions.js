// Instanciando una funcion normal
// function fn(){
//     return 'Hola Mundo';
// }
// Asignamos la funcion a una constante y la imprimimos
// const r = fn();

// console.log(r)


// Otra forma de escribir una funcion y que esta retorne objetos, es con 
// la palabra reservada new. Si notamos, dentro de la funcion, tenemos
// implicita el retorno de la palabra this, que es lo que se crea en la propiedad.
// Esto nos permite crear un objeto con la propiedad prop. 
// a este tipo de funciones se las puede llamar funciones constructoras, o funciones de tipo clase.
// son un hibrido entre una clase y una funcion:

// function Fn(){
//     this.prop = 'propiedad'; // {prop: 'propiedad'}
//     //return this; => Implicito
// }
// Fn.prototype.lala = function prototypeFunction(){}

// const r = new Fn(); // llamada a la funcion fn 

// console.log(r.__proto__);


// FAT ARROW FUNCTION:
// las fat arrow funtions son funciones escritas con una flecha y sin la palabra reservada function.
// no tienen un contexto de this. Y si intentaramos usar el this, este apuntaria a un contexto global,
// o distinto, pero nunca al contexto de la funcion.

const fatFn = () => {
    return 'Hola Mundo';
};
const r1 = fatFn();
console.log(r1);

