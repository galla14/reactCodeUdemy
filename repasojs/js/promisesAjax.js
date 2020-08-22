//Promises whit ajax
const descargarUsuario = cantidad => new Promise((resolve, reject) =>{
    //Pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&natus`;

    //llamado a ajax

    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open('GET', api, true);
    
    //on load --> una vez que tengas el on load revisaras la conexion 
    //Con json.parse convierto todo el string en un objeto de java script, para poder
    //tratarlo
    xhr.onload = () => {
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            reject(Error(xhr.statusText));
        }
    }

    //opcional (on error)
    xhr.onerror = (error) => reject(error);

    xhr.send();
});

//console.log(descargarUsuario(20));

descargarUsuario(30)
.then(
    miembros => imprimirHTML(miembros),
    error => console.error  (
        new Error('Hubo un error' + error)
    )
);

//De esta manera recibis un json desde una api

function imprimirHTML(usuarios) {
    let html ='';
    usuarios.forEach(usuario => {
        html += `
            <li>
                nombre: ${usuario.name.first} ${usuario.name.last}
                pais: ${usuario.nat}
                imagen:
                    <img src="${usuario.picture.medium}">
            </li>
        `;
    });

    const contenederApp = document.querySelector('#app');
    contenederApp.innerHTML = html;
}