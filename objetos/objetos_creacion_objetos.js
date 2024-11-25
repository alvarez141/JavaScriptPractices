// los tipos primitinos no contiene metodos ni atributos
// los objetos son un conjunto de atributos y metodos


//objeto
let persona = {
    nombre: "Juan", //propiedad
    apellido: "Perez",//propiedad
    emai: 'jperez@gmail.com',//porpiedad
    edad: 28,//propiedad
    // agregar FUNCION/METODO al objeto
    nombreCompleto: function(){
        //return this.nombre + ' ' + this.apellido;
        return `${this.nombre} ${this.apellido}`
    }
};
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.emai)
console.log(persona.edad)
console.log(persona)
console.log(persona.nombreCompleto())


//otra forma de crear un objeto
// cuando hablamos de objetos en JS es como diccionarios en python
// dentro del Objeto hay propiedades y metodos/funciones
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '5555-5555';

console.log(persona2)