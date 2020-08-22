import React from 'react';
import './carrito.css';
import Productos from './Productos';

const Carrito = ({carrito, agregarProducto}) => (
    <div className="carrito">
        <h2>Tu carrito de compras</h2>

        {carrito.length === 0 ? <p>No hay elementos en el carrito</p> : carrito.map(producto => (
            <Productos 
                key={producto.id} 
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))}
    </div>
    //return (  );
)
 
export default Carrito;