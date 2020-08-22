//POO - clases

class Tarea {
    constructor (nombre, prioridad){
            this.nombre =nombre;
            this.prioridad = prioridad
    }
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
    }
}

let tarea1 = new Tarea('aprender Java', 'super alta');
let tarea2 = new Tarea('Preparar cafe', 'Alta');
let tarea3 = new Tarea('Pasear al perro', 'media');
let tarea4 = new Tarea('Conocer suegro', 'baja');


//console.log(tarea1.mostrar());
//console.log(tarea2.mostrar());
//console.log(tarea3.mostrar());
//console.log(tarea4.mostrar());

//Heredar

class Compras extends Tarea {
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar(){
        super.mostrar();
        console.log(` y la cantidad de ${this.cantidad}`);
    }
}

let compra1 = new Compras ('jabon', 'alta', '1');
//console.log(compra1.mostrar());
compra1.mostrar()
