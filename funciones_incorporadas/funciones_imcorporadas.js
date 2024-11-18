// Funciones imcorporadas en JS


let cadena1 = 'Hola';
console.log(cadena1.length); // 4


// no podemos modificar las cadenas en JS por que son immutables
cadena1[0] = 'x';
console.log(cadena1); // Hola

// Si podemoas asignar una nueva cadena

cadena1 = 'adios';
console.log(cadena1); // adios

cadena1.split('').forEach((letras, indice) => {
    console.log(`Indice:[${indice}] - ${letras}`);// a d i o s
});