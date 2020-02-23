//Destructuring de objetos
//Destructuring es extraer valores de una variable de un objeto
const aprendiendoJS = {
    version : {
        nueva: 'ES6',
        vieja: 'ES5'
    },
    frameworks: ['React', 'VueaJS', 'AngularJS']
}

console.log(aprendiendoJS);
//Vieja version
//let version = aprendiendoJS.version.nueva;
//console.log(version);

//Nueva version
let {vieja} = aprendiendoJS.version;
console.log(vieja);


