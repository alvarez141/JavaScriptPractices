// Operadores relacionales
let a = 5;
let b = '5';

console.log(a);
console.log(b);

//Operadores de igualdad
//(solo compara valores, y hace una conversion si es necesario)
console.log("a == b ->", a == b); //true
console.log(`a == b -> ${a == b}`) //true

//Operadores de identidad exacto
//(compara valores y tipos)
console.log("a === b ->", a === b); //false

// String interpolation
console.log(`${a} === ${b} -> ${a === b}`); //false

//Operador de desigualdad
//Compara valor y convierte si es necesario
console.log(`${a} != ${b} -> ${a != b}`); //false

//Operador de desigualdad estricto
//Compara valor y tipo
console.log(`${a} !== ${b} -> ${a !== b}`); //true

//Operador menor que
console.log(`${a} < ${b} -> ${a < b}`); //false

//Operador menor o igual que
console.log(`${a} <= ${b} -> ${a <= b}`); //true

//Operador mayor que
console.log(`${a} > ${b} -> ${ a > b}`);// false

//Operador mayor o igual que
console.log(`${a} >= ${b} -> ${a >= b}`); //true