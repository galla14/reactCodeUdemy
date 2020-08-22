import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    // para mostrar en la pagina las variables, debemos hacerlo atraves del objeto
    /*return (
        <div>
            <h2>{producto.nombre}</h2>
            <p>${producto.precio}</p>
        </div>
    );*/
    //Con mas prolijidad de mostrar el array, debemos guardarlo en const de llave
    const {nombre, precio, id}= producto

    //Se agrega funcion del button, para comprar
    const seleccionarProducto = id => {
        console.log("entro")
        //Para poder seleccionar el producto, nosotros lo obtenes recorriendo cada dato del array, a traves
        //de este arrawFunction y buscando el id, la idea es filtrar el id dentro de este arrawFunction
        //todo esto es para poder agregar todo el array --> para poder seleccionar el producto, para ello debemos de pasarle el
        //objeto de producto completo
        //Para poder obtener el producto, cada vez que presionemos el boton de 'comprar' lo vamos a obtener a traves del id
        const producto = productos.filter( producto => producto.id === id) [0];
        console.log(producto);
        agregarProducto([
            //Copiamos el array de carrito con un restOperator, clonamos array
            ...carrito, 
            producto
        ]);
        
    }

    //Funcion/metodo eliminar, para eliminar productos desde el carrito
    const eliminarProductos = id => {
        const productos = carrito.filter(producto => producto.id !== id)
        console.log(producto);
        agregarProducto(productos)

    }


    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {productos
                ?(  <button
                        type="button"
                        onClick= {() => seleccionarProducto(id)}
                    >Comprar</button>)
                :(  <button
                        type="button"
                        onClick={()=>eliminarProductos(id)}
                    >Eliminar</button>)
            }
            
        </div>
    )
}
 
export default Producto;