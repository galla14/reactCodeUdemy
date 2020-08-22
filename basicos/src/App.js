import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Productos from './componentes/Productos';
import Carrito from './componentes/Carrito';

function App() {

  const [productos, guardarProductos] = useState([
    
    {id: 1, nombre: 'Camisa ReactJS', precio: 50},
    {id: 2, nombre: 'Camisa NodeJS', precio: 132},
    {id: 3, nombre: 'Camisa Java', precio: 83},
    {id: 4, nombre: 'Camisa Angular', precio: 27},

  ])

  //Se agrega un state para el carrito de compras
  //para este useState, el primero (carrito) es el valor, el segundo sera el que modificara el arrray
  const [carrito, agregarProducto] = useState([]);

//Obtener año
  const fecha =  new Date().getFullYear();
  return (
    //<div className="App">
    <Fragment>
      <h1>Hola mundo</h1>
      <Header 
        titulo="Tienda virtual"
      />

      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Productos
        //key,producto,precio,carrito,agregarProducto son props que le vamos a pasar a Productos.js
          key={producto.id}
          producto={producto}
          precio={producto.precio} 
          carrito={carrito}
          //agregamos una props de procuto, para obtener el objeto de producto completo cuando lo seleccionamos
          productos={productos}
          //funcion se lo pasa a productos de la misma manera
          agregarProducto={agregarProducto}
        />
      ))} 

      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer 
        fecha={fecha}
      />
      </Fragment>  
    //</div>
  );
}

export default App;
