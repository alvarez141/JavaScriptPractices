// Paso por referencia JS
// Objetos (array) se pasan por referencia


function cambiarValor(parametro){
    parametro[0] = 40;
}

// llamamos a la funcion

let arreglo = [10];
console.log(arreglo);
cambiarValor(arreglo);
console.log(arreglo);