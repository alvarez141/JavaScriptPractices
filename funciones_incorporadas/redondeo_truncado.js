// redondep y truncado en javascript

let numero = 8.5, redondeo, truncado;

//El metodo redondeo() redondea un numero al entero mas cercano
//el metodo truncado() elimina la parte decimal de un numero

redondeo = Math.round(numero);
truncado = Math.trunc(numero);
console.log(redondeo);    // 9
console.log(truncado);      // 8