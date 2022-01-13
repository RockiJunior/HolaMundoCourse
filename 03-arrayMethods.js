//EJEMPLO FILTER
const arr = [0, 1, 2, 3, 4];

// arr.filter((el, i) => {
//   console.log(el > 2);
// });
//=> esto devuelve booleanos con los elementos que cumplen la condicion

const filterArr = arr.filter((el) => el > 2);
// console.log(filterArr);
//=> esto devuelve un log del array con los elementos que cumplen la condicion

//EJEMPLO MAP
const mapped = arr.map((el) => el * 2);
// console.log(mapped);
//=> esto devuelve un array con los elementos multiplicados por dos

const mapped2 = arr.map((el) => `<h1>${el}</h1>`);
// console.log(mapped2);
//=> esto devuelve un array con elementos html y los elementos dentro de los mismos

const users = [
  { id: 1, name: "John1" },
  { id: 2, name: "John2" },
  { id: 3, name: "John3" },
  { id: 4, name: "John4" },
];
const usersMapped = users.map((user) => `<h1>${user.name}</h1>`);
// console.log(usersMapped)

const arrReduced = arr.reduce((acc, el) => acc + el, 0);
// acc = acumulador
// el acc, es el valor de cada elemento del array, por cada pasada del loop
// el, es el elemento actual del loop
// 0 es el valor inicial del acumulador
// Ejemplo por vueltas:
// 0 + 0 = 0
// el acc es 0 + el elemento 0 del array que es 0
// 0 + 1 = 1
// el acc es 1 + el elemento 1 del array que es 1
// 1 + 2 = 3
// el acc es 3 + el elemento 2 del array que es 2
// 3 + 3 = 6
// el acc es 6 + el elemento 3 del array que es 3
// 6 + 4 = 10

// console.log(arrReduced); => 10
// tambien se pueden pasar funciones al reducer

const getMaxValue = (a, b) => Math.max(a, b);

const arrGetMaxReduced = arr.reduce(getMaxValue, 0);
//si en el array contenemos algun tipo de valor negativo, sencillamente eliminamos el cero de la derecha
//para que el valor inicial sea el negativo maximo:

// const arrGetMaxReduced = arr.reduce(getMaxValue);
// console.log(arrGetMaxReduced)

// const reducedUsers = users.reduce(
//   (acc, el) => `${acc === " " ? " " : `${acc},`}${el.name}`,
//   " "
// );

const reducedUsers = users.reduce((acc, el) => {
  if (el.id < 2) {
    return acc;
  } else {
    return acc.concat(el)
  }
}, []);

console.log(reducedUsers);
