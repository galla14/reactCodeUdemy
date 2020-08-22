//Agreagar funciones o metodos a un objeto

const persona = {
    nombre: 'Brian',
    trabajo: 'programador',
    edad: 24,
    musicElectronic: true,
    //Podes agregar funciones de dos formas
    //mostrarInfo: function(){
    mostrarInfo(){
            console.log(`${this.nombre} es ${this.trabajo} y su edad ${this.edad}`)
    }
}

persona.mostrarInfo();