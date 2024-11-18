// convertir numero a cadena de texto

let a = 10 , b = 20;

// si son valores numericos se suman
console.log(a + b); // 30

// convertir los valores numericos a cadena de texto

let concatenar = a.toString() + b.toString();

console.log(concatenar); // 1020

let numero = [1,2,3,4,5,6,7,8,9,0];

numero.forEach((element) => {
    console.log(element.toString());
});