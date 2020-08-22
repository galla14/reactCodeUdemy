//modulos en java scripts
//si queremos importar algo de otro js, debemos agregar en el index
//dentro del tag de script, un type

import {nombreTarea, crearTarea, tareaCompletada} from './modulos2.js';
console.log(nombreTarea);

// no importa el nombre que le pongas al import, es un nombre de fantasia
//ya que entiende de por si cual es el default y solo puede haber 1. Puedes
//nombrarla como quieras

//exportar funciones en modulos

const tarea1 = crearTarea('pasear al perro', 'media');
console.log(tarea1);

tareaCompletada();