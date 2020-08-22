//modulos en java scripts funciones y variables
// export const nombreTarea = 'Pasear al perro';
// // const tarea = 'tarea';

// // export default {
// //     nombre: nombreTarea,
// //     tarea: tarea
// // }

// //exportar una funcion

// export const crearTarea = (tarea, prioridad) => {
//     return `La tarea ${tarea} tiene prioridad ${prioridad}`;
// }

// export const tareaCompletada = () => {
//     console.log('tarea completada');
// }


//Importar y exportar clases
import Tarea from './expImpClass.js';

const tarea1 = new Tarea('aprender java', 'urgente');

console.log(tarea1);
tarea1.mostrar();