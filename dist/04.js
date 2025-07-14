var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('Camisa estampada con logo de: ' + logo);
        };
        target.prototype.logo = logo; // Agrega propiedad logo
    };
}
//Clase (molde del objeto)
let Camiseta = class Camiseta {
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
};
Camiseta = __decorate([
    estampar('Adidas')
], Camiseta);
export { Camiseta };
let camiseta = new Camiseta("rojo", "manga corta", "Nike", "L", 19.99);
(_a = camiseta.estampacion) === null || _a === void 0 ? void 0 : _a.call(camiseta);
class Sudadera extends Camiseta {
    constructor(color, modelo, marca, talla, precio, capucha) {
        super(color, modelo, marca, talla, precio);
        this.capucha = capucha;
    }
    setCapucha(capucha) {
        this.capucha = capucha;
    }
    getCapucha() {
        return this.capucha;
    }
}
console.log(camiseta);
camiseta.setColor('Verde');
console.log(camiseta);
let color = camiseta.getColor();
console.log(color);
let sudadera = new Sudadera('amarillo', 'sin mangas', 'nike', 'L', 30, true);
sudadera.setColor('Roja');
console.log(sudadera);
/* ASI FUNCIONA SIN CONSTRUCTOR
// var playera = new Camiseta();
// playera.color ='azul'
// playera.modelo ='resacada'
// playera.marca ='Adidas'
// playera.talla ='M'
// playera.precio = 12.99
console.log(playera) */ 
