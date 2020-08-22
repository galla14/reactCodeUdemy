import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario.js'
import Cita from './components/Cita.js'


//Vamos a tratar de crear dos columnas para el proyecto de citas, esto lo vamos a hacer a traves del framework skeleton
//vamos a retornar dos valores, 'react y fragment'.
//Vamos a crear dos columnas a traves de un div className="row", y un div className="one-half column"
//a esto se le conoce como GRID
//en el caso de poner el mismo nombre en className, se vera una columna al lado de la otra, en caso de cambiarlo se vera
//en la linea de abajo


//MANTENER GUARDADO --> se utiliza local storage, es una mini BD rustica, que si cerramos el navegador no ese borra, a menos que
//vayamos al localStoreage con F12 y lo eliminemos, o a traves de codigo
function App() {
  //Vamos a generar el state principal que guardara el array pcpal de las citas, es decir, las citas confirmadas
  
  const [citas, guardarCitas]= useState([]);

  //useEffect realizar ciertar operaciones cuando el state cambia
  useEffect(() => {
    console.log("Documento listo o algo paso con las citas");
  }, [citas])

  //Necesitamos leer y guardar citas, es decir, leer y guardar el nuevo state que creamos anteriormente
  //creamos una funcion nueva 
  const crearCita = cita => {
    guardarCitas([
      //todas las citas
      ...citas,
      //la nueva cita 
      cita
    ])
  }

  //Funcion que elimina cita por id
  const eliminarCita = id =>{
    //alert("Eliminar")
    const nuevasCitas=citas.filter(cita=>cita.id !== id);
    guardarCitas(nuevasCitas);

  }

  const titulo =citas.length === 0 ? "No hay citas":"Administra tus citas"
  
  return (
    <Fragment>
      <h1>Administrar pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita=>(
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
