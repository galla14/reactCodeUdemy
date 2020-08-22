//recorrer con un foreach un array
/*const carrito = ['producto1', 'producto2', 'producto3'];

console.log(carrito);
const appContenedor = document.querySelector('#app');

let html = '';
carrito.forEach(producto => {
    html +=`<li>${producto}</li>`;
})

appContenedor.innerHTML = html;*/


//Con un map
//Copiar y pegar en la console de google
/*carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

carrito.map (producto => {
    return 'Producto es: ' + producto;
});
*/
//console.log(carrito);
//Si queremos comprobar que una variable existe en un objeto podemos hacer una keys
//donde le pasaras el objeto y te devuelve todas las variables de un objeto
//No el valor de la variable, sino el nombre del objeto

const persona = {
    nombre: 'Brian',
    trabajo: 'Programador',
    edad: 24
}

console.log(Object.keys(persona));
