//Funciones con parametros por default con function declaration
function actividad (nombre, activity){
    console.log(`Nombre: ${nombre} actividad: ${activity}`);
}

actividad('Brian', 'Desarrollador');
//actividad("Micaela");
//actividad();

//Funciones con parametros por default con function expression
function activ2(nombre = "no tiene", activity = "No hace"){
    console.log(`Nombre: ${nombre} actividad: ${activity}`);
}

activ2("Micaela", "Periodismo");
activ2();

//Esta ultima se utiliza en react