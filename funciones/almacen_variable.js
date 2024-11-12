// alcance de varaibles JS

let variableGlobal = 5;
 // definir funcion
variableGlobal = 10;
function miFuncion(variableLocal){
    console.log(variableLocal);

    //modificar variable global
    variableGlobal = 20;
    console.log(variableGlobal);
}

miFuncion(variableGlobal);