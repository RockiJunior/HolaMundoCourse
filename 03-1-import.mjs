// ECMA SCRIPT 5
// const chanchos = require('./03-export');
// console.log(chanchos);

// ECMA SCRIPT 6
// para utilizar el archivo en es6, de debe importar en conjunto con una
// configuracion de package.json, o bien, con la extension de .mjs
import {chanchos, ovejas} from './03-export.mjs';
console.log(chanchos, ovejas);