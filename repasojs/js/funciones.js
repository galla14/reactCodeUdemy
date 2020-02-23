
//Funciones

//Function declarations
//No importa si el llamado de la funcion este antes o despues, cuando la consola
//ve que declaramos algo como function, va a ejecutar todo el documento. Esto pasa en
//las function declaration
function saludar(nombre){
    console.log("Welcome to tomorrowland: " + nombre);
}

saludar ("Pepe");
saludar("Brian");
saludar("Micaela");

//Function expression, estas obligado a que primero debes declarar la funcion
//antes de utilizarla.

const cliente = function (nombreCliente){
    console.log("Mostrando info del cliente: " + nombreCliente);
    //console.log("Mostrando parte 2: " ${nombreCliente});-->No se puede
}
cliente ("Micaela");
