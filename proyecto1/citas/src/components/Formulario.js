import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4';

//acordarse poner la funcion de esta manera es destructuring
const Formulario = ({crearCita}) => {

    //Crear el state(estado) de citas

    //inicio el state con cada variable que luego va a llenar el utilitario de la pagina
    //Recordemos que inicia vacios
    //actualizarCita nos va a permitir reescribir actualizar el objeto. Cuando se va a utilizar esta funcion?
    //Cuando el usuarui este escribiendo
    const [cita, actualizarCita]=useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    //para tener un error y avisar al usuario debemos avisarle
    const [error, actualizarError] = useState(false);

    //implementamos handleChange para actualizar el objeto cita, este se ejecuta cada vez que el usuario escribe
    //en un input

    const handleChange=(evento) => {
        //console.log("Escribiendo......!!!sdkgnks")
        //Para saber que campo estas escribiendo
        //console.log(evento.target.name);
        //para saber lo que esta escribiendo el usuario
        //console.log(evento.target.value);
        //Para escribir correctamente la informacion que quiera agrregar al input debemos de

        actualizarCita({ 
            ...cita,
            [evento.target.name] : evento.target.value
        })
    }

    //Extraer valores para que no tengas que escribir siempre cita.*
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita=(e)=>{
        //para prevenir la accion por default
        e.preventDefault();
        var valida = false;
        //hay ciertas acciones que debemos hacer para enviar una cita:
        //validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' ||
        sintomas.trim() === ''){
            actualizarError(true);
            //Para que no continue ejecutando el codigo, debemos de agregar un return
            return;
        }
        actualizarError(false);
        //asignar id
        cita.id=uuid();
        console.log("cita: " + cita);
        //crear cita
        //a esta altura va a tener el id que le pasamos arriba!
        crearCita(cita);
        //reiniciar form (siempre es una muy buena practica)
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    
    }

    //Cada vez que se escribe un input, se va a ejecutar el onChange, que contiene la funcion handleChange
    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            {error? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
               onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                    >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar cita
                </button>
            </form>            
        </Fragment>
     );
}
 
export default Formulario;