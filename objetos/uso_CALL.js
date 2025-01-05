// El metodo Call nos va a permitir llamar a un metodo/funcion que esta definido
// en un objeto desde otro objeto

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        //return this.nombre + ' ' + this.apellido;
        return `${titulo}: ${this.nombre} ${this.apellido}, ${tel}`;
    },
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

// Uso de Call para usar el metodo persona1.nombreCompleto con los datos de persona1
console.log(persona1.nombreCompleto('Ing', '1234567890'));

console.log(persona1.nombreCompleto.call(persona2, 'Lic', '0987654321')); // Uso de Call para usar el metodo persona1.nombreCompleto con los datos de persona2