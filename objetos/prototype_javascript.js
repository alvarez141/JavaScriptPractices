
//Funcion contructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}
// El metodo Prototype nos permite agregar propiedades a los objetos
Persona.prototype.tel = "123456789";

persona = new Persona("Juan", "Perez", "daniel@sunprored.es");
persona.nombre = "Daniel";
persona.tel = "987654321";
console.log(persona);
console.log(persona.nombreCompleto());

madre = new Persona("Maria", "Gomez", "comercial@sunprored.es");
console.log(madre);

