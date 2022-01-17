let obj1 = {a: 1, b: 2};
let obj2 = {b: 5, d: 4};

obj2.c = 'hola que tal';
obj1.b = 'hola que tal2';

let obj3 = {...obj1, ...obj2};
console.log(obj3);