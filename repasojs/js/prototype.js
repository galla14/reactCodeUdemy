function mostrarInformacionCompleta(ciudad, dia){
    return `La ciudad a viajar es ${ciudad} y estaremos ${dia} dias`;
}

const persona = {
    nombre: 'Brian',
    profesion: 'Programador',
    edad: 24
}

const mostrarPerson = mostrarInformacionCompleta(persona.nombre, persona.profesion);

console.log(mostrarPerson);

//Object constructor
function Viaje(ciudad, dia="no sabemos"){
    this.ciudad=ciudad;
    this.dia=dia;   
}

//Creamos los diferentes viajes
const viaje1 = new Viaje("Miami", 15);

const mostrarInfo = mostrarInformacionCompleta(viaje1.ciudad, viaje1.dia);
console.log(mostrarInfo);

///////////Otra forma de hacer prototypes

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

Tarea.prototype.mostrarInformacionTarea = function (){
    return `La tarea ${this.nombre} tiene prioridad `
}

const tarea1 = new Tarea ('Aprender java script', 'urgente');
console.log(tarea1);