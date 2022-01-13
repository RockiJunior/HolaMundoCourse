//El rest operator transforma los argumentos de una funcion(fat arrow function, o function), en un array.
//El rest operator se puede usar en la declaracion de una funcion, o en la llamada de una funcion.
//el rest operator siempre tiene que ir al final de una declaracion de argumentos como en el segundo ejemplo.

/* //EJEMPLO 1
const rest = (...argumentos) => {
  console.log(argumentos);
};
rest(1, 2, 3);

//EJEMPLO 2
const rest2 = (a, ...argumentos) => {
  console.log(a);
  console.log(argumentos);
};
rest2(1, 2, 3); */

//EJEMPLO CON OBJETOS
/* const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const { a, b, ...restObj } = obj;

console.log(a, b, restObj); */

//EJEMPLO CON ARRAYS

/* const arr = [1, 2, 3, 4, 5];
const [a, b, ...restArr] = arr;

console.log(a, b, restArr); */

const useState = () => ["valor", (valor) => {}];

const [valor, setValor] = useState();
console.log(valor, setValor)