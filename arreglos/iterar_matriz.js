// Iterar matrizes en JavaScript

let matriz = [[100,200,300],[400,500,600,700]];


// Iterar matriz con for each
matriz[0].forEach(numero => {
    console.log(numero);
});

for (let i = 0; i < matriz[0].length; i++) {
    console.log(matriz[0][i]);
}

for (let x = 0; x < matriz[1].length; x++) {
    console.log(matriz[1][x]);
}

// Renglones
for (let ren = 0; ren <  matriz.length; ren++) {
    for (let col = 0; col < matriz[ren].length; col++) {
        console.log(`Elemento [${ren}][${col}] = ${matriz[ren][col]}`);
    }
}
matriz.forEach((row, col) =>{
    row.forEach((element, index) =>{
        console.log(`Element [${col}][${index}] = ${element}`);
    });
});