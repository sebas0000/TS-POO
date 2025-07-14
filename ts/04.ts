//Interface propiedades y metodos que se usaran en el objeto
interface CamisetaBase{
    setColor(color:string):void;
    getColor():string;
    estampacion?(): void;
}
//Decorador
function estampar(logo: string) {
    return function (target: Function) {
        target.prototype.estampacion = function (): void {
            console.log('Camisa estampada con logo de: ' + logo);
        };
        target.prototype.logo = logo; // Agrega propiedad logo
    };
}

//Clase (molde del objeto)
@estampar('Adidas')
export class Camiseta implements CamisetaBase{
    //Propiedades (Caracteristicas del objeto)
    constructor(
        public color : string,
        public modelo: string,
        public marca: string,
        public talla: string,
        public precio: number
    ){}
    estampacion!: () => void;
    //Metodos (Funciones o acciones del objeto)
    public setColor(color: string):void{
        this.color = color;
    }
    public getColor():string{
        return this.color
    }
} 
let camiseta = new Camiseta("rojo", "manga corta", "Nike", "L", 19.99);
camiseta.estampacion?.();
class Sudadera extends Camiseta{
    constructor(
        color: string,
        modelo: string,
        marca: string,
        talla: string,
        precio: number,
        public capucha: boolean
    ){super(color, modelo, marca, talla, precio);}

    setCapucha(capucha:boolean):void{
        this.capucha = capucha
    }
    getCapucha():boolean{
        return this.capucha
    }
}


console.log(camiseta)
camiseta.setColor('Verde')
console.log(camiseta)
let color : string = camiseta.getColor()
console.log(color)
let sudadera = new Sudadera('amarillo','sin mangas','nike','L',30,true)
sudadera.setColor('Roja')
console.log(sudadera)

/* ASI FUNCIONA SIN CONSTRUCTOR
// var playera = new Camiseta();
// playera.color ='azul'
// playera.modelo ='resacada'
// playera.marca ='Adidas'
// playera.talla ='M'
// playera.precio = 12.99
console.log(playera) */