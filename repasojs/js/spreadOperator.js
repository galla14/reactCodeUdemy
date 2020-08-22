//Spread operator
//Nos permite combinar 2 arrays diferentes

let lenguajes = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django'];

//Forma anterior de combinar los 2 arrays 

let combinacion = lenguajes.concat(frameworks);

console.log(combinacion);

//Nueva forma de combinar 2 arrays
let combination = [...lenguajes,...frameworks];

console.log(combination);

//tambien podes copiar un array con spread operator
let copyArray = [...lenguajes];
console.log(copyArray);

//Poner el array al reves

//let [ultimo] = lenguajes.reverse();
//console.log(ultimo);

//el reverse lo da vuelta, si imprimimos la variable en el que inicializo, se vuelta
//el array completo
console.log(lenguajes);
//La idea es combinar el reverse con el spread, para poder crear una copia
//y lo daria vuelta, todo en una misma linea
let lenguajes2 = ['JavaScript', 'PHP', 'Python'];
//let [ultimo2] = lenguajes2.reverse(); --> no
let [ultimo2] = [...lenguajes2].reverse();
console.log(ultimo2);
console.log(lenguajes2);

//Otra cosa mas ,por si quiero sumar
function suma(a,b,c){
    console.log(a+b+c);
}

const numeros = [1,2,3];
suma(...numeros);



