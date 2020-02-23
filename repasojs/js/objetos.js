//Object literal

const persona = {
    nombre: 'Brian',
    profesion: 'Programador',
    edad: 24
}
//Acceder e imprimir todo el objeto
console.log(persona);
//Acceder o imprimier variable a variable, del objeto
console.log(persona.nombre);
console.log(persona['nombre']);

//Object constructor
function Viaje(ciudad, dia="no sabemos"){
    this.ciudad=ciudad;
    this.dia=dia;
}

//Creamos los diferentes viajes
const viaje1 = new Viaje("Miami", 15);
const viaje2 = new Viaje("Europa", 20);
const viaje3 = new Viaje("Dubai");

console.log(viaje1);
console.log(viaje2);
console.log(viaje3);