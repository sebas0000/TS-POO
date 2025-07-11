import { Camiseta } from "./04.js";
class Tienda{
    constructor(){
        console.log('Aplicacion cargada!')
    }
    getCamiseta(){
        return new Camiseta('Rojo','Manga larga','Adidas','M',35)
    }
}
let tienda = new Tienda()
console.log(tienda.getCamiseta())

//NOTA: al momento de importar, todo el archivo se carga, por ender se ejecuta todo dentro del mismo archivo, incluyendo console.logs y variables