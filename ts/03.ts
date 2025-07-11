let cadena : string = "Trotuga"
console.log(cadena)
let numero : number = 12
console.log(numero)
let booleano : boolean = true
console.log(booleano)
let cualquiera : any
console.log(typeof(cualquiera))
let arr : Array<string> = ["SQL","PHP","JS"]
console.log(arr)
let años : number[] = [12,13,14,15]
console.log(años)


function getNumero(funcion: number = 12):string{
    return 'el numero es: '+funcion
}
console.log(getNumero(40))