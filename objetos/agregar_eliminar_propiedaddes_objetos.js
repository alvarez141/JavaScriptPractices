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
persona.telefono = '123456789'; //agregar propiedad
persona.telefono = '12345678'; //modificar propiedad
console.log(persona);

delete persona.telefono; //eliminar propiedad
console.log(persona);