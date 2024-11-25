// El metodo GET y SET son funciones que se utilizan
//para obtener y establecer el valor de una propiedad de un objeto.
// El Set modifica el valor de un GET y el GET obtiene el valor de un SET
let persona = {
    nombre: "Juan", //propiedad
    apellido: "Perez",//propiedad
    emai: 'jperez@gmail.com',//porpiedad
    edad: 28,//propiedad
    idioma: 'es',//propiedad
    get lang(){
        return this.idioma.toUpperCase();
    },// agregar FUNCION/METODO al objeto
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },// agregar FUNCION/METODO al objeto
    get nombreCompleto(){
        //return this.nombre + ' ' + this.apellido;
        return `${this.nombre} ${this.apellido}`
    }
};

console.log(persona.lang);//ES
persona.lang = 'en';
console.log(persona.lang);//EN
console.log(persona.idioma)