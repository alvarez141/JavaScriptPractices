// Un arreglo nos permite almacenar multiples valores en una sola variable , en lugar de definir varias elemntos

let numerosArreglo = [];

numerosArreglo[0] = 13;
numerosArreglo[1] = 23;
numerosArreglo[4] = 'hola'
console.log(`Elemento 1 - [0]: ${numerosArreglo[0]}`);  // 13
console.log(numerosArreglo);    // [ 13, 23, <2 empty items>, 'hola' ]
console.log(`ultimo elemento: ${numerosArreglo[numerosArreglo.length - 1]}`);  // hola

