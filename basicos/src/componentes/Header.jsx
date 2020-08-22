import React from 'react';
import App from '../App';

function Header({titulo}){

    //Por fuera del return podrias poner codigo javaScript
    //variables,, if
    //Todo lo que se coloca dentro del siguiente return, es lo que se va a ver
    //dentro de la pantalla
    // const edad = 18;

    // let mensaje;
    // if(edad > 17){
    //      mensaje='Mayor de edad'
    // }else{
    //     mensaje='eres menor'
    // }
    return (
    //<h1>{edad} Desde el header {mensaje}</h1>
    //Si quiero agregar estilos, y desde una clase, lo debemos hacer
    //con className porque class es una palabra reservada de Java script
    <h1 className="encabezado">{titulo}</h1>
    ) 
}


export default Header;