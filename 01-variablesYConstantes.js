var miVariable = 'variable creada con var';
miVariable = 'otro valor a var'

let variableLet = 'variable creada con let';
variableLet = "otro valor a let"

const constante = 'constante creada con const';
// constante = "otro valor a const";
// notese que esto da error porque no se puede cambiar el valor de una constante


console.log(miVariable);
console.log(variableLet);
console.log(constante);

// La diferencia entre un let y un var, es que var toma el valor que le asignemos 
// y lo coloca al principio de la ejecucion del archivo. 
// En el caso de let, el valor se coloca en el momento en que se llama a let