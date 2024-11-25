//Accder a las propiedades de un objeto

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

console.log(persona.nombreCompleto());//Juan Perez

// se pued eacceder a las propiedades de un objeto de dos formas
//1. Notacion de punto
//2. Notacion de corchetes
console.log(persona['apellido'])

for (NombrePropiedades in persona){
    console.log(persona[NombrePropiedades]);
    
}
for (let NombrePropiedades in persona) {
    if (typeof persona[NombrePropiedades] === 'function') {
        console.log(persona[NombrePropiedades]());
    }
}