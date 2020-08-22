//Metodos en arrays

const personas = [
    {nombre: 'Brian', edad: 24, aprendiendo: 'JavaScript'},
    {nombre: 'Mica', edad: 24, aprendiendo: 'Java'},
    {nombre: 'Raul', edad: 30, aprendiendo: 'python'},
    {nombre: 'Batiman', edad: 10, aprendiendo: 'multiplicar'},
    {nombre: 'otro', edad: 11, aprendiendo: 'dividir'},
]

console.log(personas);

//Quienes son mayores de 28?
const mayores = personas.filter(persona =>{
    return persona.edad > 28;
});

//Guarda aquellas personas mayores a 28 en un nuevo array
console.log(mayores);

//edad y aprendizaje de Raul

const raul = personas.find(persona => {
    return persona.nombre === 'Raul';
});

console.log(raul);

//Hacer una sumatoria
let total = personas.reduce((edadTotal, persona)=>{
    return edadTotal + persona.edad;
}, 0);
console.log(total);

//tamaño del array
console.log(personas.length);
//Sacar promedio?
console.log(total / personas.length);