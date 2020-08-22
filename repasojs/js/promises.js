//Promises
//Nos ayudan a comprender mejor el codigo
//Cuando haces un llamado asincronico a una api, tenes 2 opciones
//que el codigo y el llamado a la api funcionen o fallen

//Con el promises puedes manejar el error al llamado de una funcion o en el codigo
//o que el codigo funcione y hagas algo con el llamado correcto

//El resolve es para manejar cuando NO hubo error, el reject es para manejar
//el error 
const aplicarDesc = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = false;
        if(descuento){
            resolve('Desc aplicado');
        } else {
            reject ('No se pudo aplicar');
        }
    },3000);
});

console.log(aplicarDesc);