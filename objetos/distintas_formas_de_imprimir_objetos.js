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
// Concaternar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido + ', ' + persona.emai + ', ' + persona.edad);

// iterar 
for (index in persona) {
    console.log(persona[index]);
}

// Object.values
let personaArray = Object.values(persona);
console.log(personaArray);

//  JSON.stringify
let personaString = JSON.stringify(persona);
console.log(personaString);

// JSON.parse
let personaObjeto = JSON.parse(personaString);
console.log(personaObjeto.nombre);