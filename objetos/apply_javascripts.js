// El metodo Call nos va a permitir llamar a un metodo/funcion que esta definido
// en un objeto desde otro objeto

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        //return titulo +': '+this.nombre + ' ' + this.apellido +''+ tel;
        return `${titulo}: ${this.nombre} ${this.apellido}, ${tel}`;
    },
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

// Uso de Apply para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto('Lic', '5555-5555'));

let arreglo = ['Ing', '5555-5555'];
// el apply recibe un arreglo con los parametros
console.log(persona1.nombreCompleto.apply(persona2, arreglo)); 