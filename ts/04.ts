//Clase (molde del objeto)
export class Camiseta{
    //Propiedades (Caracteristicas del objeto)
    constructor(
        public color : string,
        public modelo: string,
        public marca: string,
        public talla: string,
        public precio: number
    ){}
    //Metodos (Funciones o acciones del objeto)
    public setColor(color: string):void{
        this.color = color;
    }
    public getColor():string{
        return this.color
    }
} 
let camiseta = new Camiseta("rojo", "manga corta", "Nike", "L", 19.99);

console.log(camiseta)
camiseta.setColor('Verde')
console.log(camiseta)
let color : string = camiseta.getColor()
console.log(color)

/* ASI FUNCIONA SIN CONSTRUCTOR
// var playera = new Camiseta();
// playera.color ='azul'
// playera.modelo ='resacada'
// playera.marca ='Adidas'
// playera.talla ='M'
// playera.precio = 12.99
console.log(playera) */