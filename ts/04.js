//Clase (molde del objeto)
export class Camiseta {
    //Propiedades (Caracteristicas del objeto)
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //Metodos (Funciones o acciones del objeto)
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
let camiseta = new Camiseta("rojo", "manga corta", "Nike", "L", 19.99);
console.log(camiseta);
camiseta.setColor('Verde');
console.log(camiseta);
let color = camiseta.getColor();
console.log(color);
/* ASI FUNCIONA SIN CONSTRUCTOR
// var playera = new Camiseta();
// playera.color ='azul'
// playera.modelo ='resacada'
// playera.marca ='Adidas'
// playera.talla ='M'
// playera.precio = 12.99
console.log(playera) */ 
