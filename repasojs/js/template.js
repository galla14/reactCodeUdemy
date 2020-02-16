//template String 
const nombre = "Brian";
const trabajo = "programador";

//concatenar JavaScript
console.log('nombre: ' + nombre + ' trabajo: '+ trabajo);

console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//Forma vieja de hacerlo
const contenerApp = document.querySelector('#app');
// let html = '<ul>' + 
//                 '<li>nombre ' + nombre + '</li>' +
//                 '<li>trabajo ' + trabajo + '</li>' +
//         '</lu>';    

//contenerApp.innerHTML = html;

//Es mucho mas facil de esta manera, cuando tenes multiples lineas
//Esto vamos a utilizar
let html = `
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Trabajo: ${trabajo}</li>
    </ul>
`;
contenerApp.innerHTML = html;