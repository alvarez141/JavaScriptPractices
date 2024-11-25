// Metodo GET en un objeto
// Un metodo GET es una funcion que se comporta como una propiedad
// Se usa la palabra reservada get seguida de un nombre de funcion o metodo

let persona = {
    nombre: "Juan", //propiedad
    apellido: "Perez",//propiedad
    emai: 'jperez@gmail.com',//porpiedad
    edad: 28,//propiedad
    // agregar FUNCION/METODO al objeto
    get nombreCompleto(){
        //return this.nombre + ' ' + this.apellido;
        return `${this.nombre} ${this.apellido}`
    }
};

console.log(persona.nombreCompleto);//Juan Perez

