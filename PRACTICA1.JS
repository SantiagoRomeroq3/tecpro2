class Comida{
 constructor(id,nombre,color){
  this.id=id
  this.nombre=nombre
  this.color=color
 }

 nombrar(){
    return `${this.nombre}  de color ${this.color}`
 }
}

class Galleta extends Comida{
    constructor(id,nombre,color,sabor){
        super(id,nombre,color)
        this.sabor=sabor
    }

    nombrarGalleta(){
        return `Galletas ${this.nombre} sabor ${this.sabor}` 
    }


}

let comida_1 = new Comida(1,"manzana","rojo")
let comida_2 = new Comida(2,"pera","verde")
console.log(comida_1.nombrar())
console.log(comida_2.nombrar())

let galleta_1 = new Galleta(3,"Oreo","negro","chocolate")
let galleta_2 = new Galleta(4, "Ahoy","cafe","vainilla")
console.log(galleta_1.nombrarGalleta())
console.log(galleta_2.nombrarGalleta())
    