//➢ Define una clase Coche que tenga propiedades para marca, modelo y año. 
class coche{
    constructor(marca,model,año){

        this.marca= marca 
        this.model = model 
        this.año = año
    } 

    get marca(){
        return this._marca
    }
    set marca(NewMarca){
        this._marca = NewMarca
    }

    get model(){
        return this._model
    }
    set model(NewModel){
        this._model = NewModel
    }

    get año(){
        return this._año
    }
    set año(NewAño){
        this._año = NewAño
    }
}
let coche_1 = new coche("Honda","Civic",2022)
let coche_2 = new coche("Ford","Mustang",2023)
let coche_3 = new coche("Nissan","Altima",2023)
console.log(coche_1)
console.log(coche_2)
console.log(coche_3)



//➢ Descripción: Escribe una función que tome un array de nombres y los transforme a mayúsculas.
function nameMayus(names){
    return names.map(name => name.toUpperCase())
} 
let names = ["jose","pedro","sofia","santiago"]
let Mayus = nameMayus(names)
console.log(Mayus)

//➢ Descripción: Crea una función que reciba un arreglo de números y devuelva un nuevo arreglo que solo contenga los números mayores que 10. 
function May10(arr){
return arr.filter(num => num > 10)
}
let num = [2,4,6,8,10,12,14,16,18,20]
const may = May10(num)
console.log(may)

//➢ Descripción: Escribe una función que imprima los primeros 10 números naturales usando un bucle while. 
function natNum(){
    let contador = 1
    while (contador <= 10){
        console.log(contador)
        contador++ 
    }
}
natNum()

//➢ Descripción: Utiliza filter y map para encontrar todos los números en un arreglo que sean mayores que 10 y luego multiplícalos por 2.
function May10por2(arr){
    return arr.filter(num => num > 10)
    .map(num => num * 2)
}
let nums =[3,6,9,12,15,18,21]
let res = May10por2(nums)
console.log(res)

//➢ Descripción: Implementa una función que recorra una lista hasta encontrar el número 0, momento en el que el bucle deberá terminar. 
function EncCero(list) {
    let i = 0;
    while (i < list.length) {
        if (list[i] === 0) {
            console.log("Se encontró un 0 en la posición:", i+1);
            break; 
        }
       i++;
    }
}
let list = [2,4,6,8,10,0,12,14,];
EncCero(list);

//➢ Descripción: Crea una clase Persona que tenga propiedades para nombre, edad y un método que devuelva una descripción básica de la persona. 
class Persona {
    constructor(nombre, edad, desc) {
        this.nombre = nombre;
        this.edad = edad;
        this.desc = desc;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get edad() {
        return this._edad;
    }
    set edad(nuevaEdad) {
        this._edad = nuevaEdad;
    }

    get desc() {
        return this._desc;
    }
    set desc(nuevaDesc) {
        this._desc = nuevaDesc;
    }
    Descripcion() {
        return `se llama ${this.nombre} su edad es de ${this.edad} años y ${this.desc}`;
        }
}

let persona_1 = new Persona("Gael", 18, "Estudia una ingeniería");
let persona_2 = new Persona("Mauricio", 20, "Trabaja con su papá");
let persona_3 = new Persona("Jordy", 25, "Tiene un hijo");

console.log(persona_1.Descripcion());
console.log(persona_2.Descripcion());
console.log(persona_3.Descripcion());

//➢ Descripción: Define una clase Libro con propiedades para título, autor, y año. Agrega un método que devuelva un string con el título y el autor del libro.
class Libro {
    constructor(titulo, autor, año) {
        this._titulo = titulo
        this._autor = autor
        this._año = año
    }

    get titulo() {
        return this._titulo
    }
    set titulo(nuevoTitulo) {
        this._titulo = nuevoTitulo
    }

    get autor() {
        return this._autor
    }
    set autor(nuevoAutor) {
        this._autor = nuevoAutor
    }

    get año() {
        return this._año
    }
    set año(nuevoAño) {
        this._año = nuevoAño
    }

    TituloAutor() {
        return `el título del libro es ${this.titulo} y su autor es ${this.autor}`
    }
}
let libro_1 = new Libro("Cien años de soledad", "Gabriel Garcia Márquez", 1967)
console.log(libro_1.TituloAutor()) 

//➢ Descripción: En la clase CuentaBancaria, añade propiedades privadas para titular y saldo. Usa getters y setters para modificar el saldo.
class CuentaBanc {
    constructor(titular, saldoIni) {
        this._titular = titular
        this._saldo = saldoIni
    }

    get saldo() {
        return this._saldo
    }

    set saldo(newSaldo) {
        if (newSaldo >= 0) {
            this._saldo = newSaldo
        } else {
            console.log("Saldo incorrecto")
        }
    }

    depositar(cant) {
        if (cant > 0) {
            this.saldo += cant
            console.log(`Se depositaron ${cant}. Tu nuevo saldo es de: ${this.saldo}`)
        } else {
            console.log("La cantida debe ser mayor que cero.")
        }
    }

    retirar(cant) {
        if (cant > 0 && cant <= this.saldo) {
            this.saldo -= cant;
            console.log(`Se retiraron ${cant}. Tu nuevo saldo es de : ${this.saldo}`)
        } else {
            console.log("Cantidad a retirar debe ser mayor que cero y no puede ser mayor que el saldo.")
        }
    }
}

let cuenta = new CuentaBanc("Pedro Ortiz", 1280);
console.log(`Tu saldo es de ${cuenta.saldo} `);
cuenta.depositar(230);
cuenta.retirar(100);



//➢ Descripción: Crea una clase Utilidad que tenga un método estático que convierta grados Celsius a Fahrenheit. 
class Utilidad {
    constructor() {
        this._celsius = 0;
        this._fahrenheit = 0;
    }

    get celsius() {
        return this._celsius
    }
    set celsius(newCelsius) {
        this._celsius = newCelsius
        this._fahrenheit = this.convertCelsiusAFahrenheit(newCelsius)
    }

    get fahrenheit() {
        return this._fahrenheit
    }
    set fahrenheit(newFahrenheit) {
        this._fahrenheit = newFahrenheit
        this._celsius = this.convertFahrenheitACelsius(newFahrenheit)
    }

    convertCelsiusAFahrenheit(celsius) {
        return (celsius * 9/5) + 32
    }

}

let uti = new Utilidad()
uti.celsius = 75
console.log(`${uti.celsius} celsius, son ${uti.fahrenheit} fahrenheit`)

//➢ Descripción: Define una clase Empleado que herede de la clase Persona y añade una propiedad salario. 
class Person {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}

class Empleado extends Person {
    constructor(nombre, edad, salario) {
        super(nombre, edad)
        this.salario = salario
    }
}

let empleado_1 = new Empleado("Sofia", 25, 1200)
console.log(empleado_1.nombre)
console.log(empleado_1.edad)
console.log(empleado_1.salario)


//➢ Descripción: Implementa una clase Coche que encapsule las propiedades marca, modelo, y kilometraje y prevenga el acceso directo a kilometraje.
class Coche {
    constructor(marca, modelo, kilometraje) {
        this.marca = marca
        this.modelo = modelo
        this._kilometraje = 855
    }

    get kilometraje() {
        return this._kilometraje
    }
}

let coche1 = new Coche("Kia", "Rio")
console.log(coche1);
console.log(coche1.kilometraje) 

//➢ Descripción: Crea una clase Tienda que contenga un array de objetos de la clase Producto. Implementa métodos para añadir, remover y buscar productos. 
class Producto {
    constructor(nomProduc, precio) {
        this.nomProduc = nomProduc
        this.precio = precio
    }
}

class Tienda {
    constructor() {
        this.productos = []
    }
//metodo para añadir
    aggProduc(producto) {
        this.productos.push(producto)
        console.log(`El producto "${producto.nomProduc}" se ha añadido a la tienda.`)
    }
//metodo para remover
    RemoveProduc(nomProduc) {
        let indiceProducto = this.productos.findIndex(producto => producto.nomProduc === nomProduc)
        if (indiceProducto !== -1) {
            let productoEliminado = this.productos.splice(indiceProducto, 1)[0]
            console.log(`El producto "${productoEliminado.nomProduc}" se ha eliminado de la tienda.`)
        } else {
            console.log(`El producto "${nomProduc}" no se encontró .`)
        }
    }
//metodo para buscar
    findProduc(nomProduc) {
        let producEncontrado = this.productos.find(producto => producto.nomProduc === nomProduc)
        if (producEncontrado) {
            console.log(`Producto encontrado: "${producEncontrado.nomProduc}" su precio es de: ${producEncontrado.precio}`)
        } else {
            console.log(`El producto "${nomProduc}" no se encontró .`)
        }
    }
}

let tienda = new Tienda()
let producto_1 = new Producto("Utiles escolares", 23)
let producto_2 = new Producto("Libro", 15)
let producto_3 = new Producto("Calculadora", 17)

tienda.aggProduc(producto_1)
tienda.aggProduc(producto_2)
tienda.aggProduc(producto_3)

console.log("Productos en la tienda:", tienda.productos)

tienda.RemoveProduc("Libro")
console.log("Productos en la tienda después de remover:", tienda.productos)

tienda.findProduc("Calculadora")
tienda.findProduc("Cuaderno")



//➢ Descripción: En la clase Usuario, permite que se añadan propiedades dinámicas que no están definidas en el constructor como hobbies o intereses. 
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
        this.otrasPropiedades = {}
    }

//añado la propiedad dinamica
    aggPropiedad(nombrePropiedad, valorPropiedad) {
        this.otrasPropiedades[nombrePropiedad] = valorPropiedad
    }

//obtengo la propiedad  dinamica
    obtPropiedad(nombrePropiedad) {
        return this.otrasPropiedades[nombrePropiedad]
    }
}


let usuario = new Usuario("Carla", 15)
console.log(usuario)

//agrego otras propiedades
usuario.aggPropiedad("hobbies", ["correr", "leer"])
usuario.aggPropiedad("intereses", ["computación", "fútbol"])

//obtengo otras propiedades
console.log(usuario.obtPropiedad("hobbies"))
console.log(usuario.obtPropiedad("intereses"))


//➢ Descripción: Define una clase Configuracion donde ciertas propiedades como nombreDeUsuario no puedan modificarse después de ser inicializadas. 
class Configuracion {
    constructor(nameUsu, contraseña) {
        this._nameUsu = nameUsu
        this.contraseña = contraseña
    }

    get nombreDeUsuario() {
        return this._nameUsu
    }
}

let configuracion_1 = new Configuracion("Pedro_1", "1234")
console.log(configuracion_1.nombreDeUsuario) 

configuracion_1.nombreDeUsuario = "nuevoUsuario"
console.log(configuracion_1.contraseña) 


//➢ Descripción: En la clase Persona, asegura que la edad no pueda ser menor que 0 ni mayor que 120 usando setters.
class _Persona {
    constructor(nombre, newEdad) {
        this.nombre = nombre
        this._edad = newEdad
    }

    get edad() {
        return this._edad
    }

    set edad(newEdad) {
        if (newEdad >= 0 && newEdad <= 120) {
            this._edad = newEdad
        } else {
            console.log("La edad debe estar entre 0 y 120.")
        }
    }
}

let persona = new _Persona("Ernesto", 20)
console.log(persona.edad) 

persona.edad = 121 
console.log(persona.edad) 


//➢ Descripción: Implementa una clase Cadena que tenga métodos para contar número de vocales, invertir la cadena, y verificar si es un palíndromo. 
class Cadena {
    constructor(texto) {
        this.texto = texto
    }

    contarVocales() {
        const vocales = 'aeiouAEIOU'
        let conteo = 0
        for (let caracter of this.texto) {
            if (vocales.includes(caracter)) {
                conteo++
            }
        }
        return conteo
    }

    invertirCadena() {
        return this.texto.split('').reverse().join('')
    }

    esPalindromo() {
        const textoLimpio = this.texto.toLowerCase().replace()
        const textoInvertido = this.invertirCadena().toLowerCase().replace()
        return textoLimpio === textoInvertido
    }
}

let cadena = new Cadena("Hola como estas")
console.log("Número de vocales:", cadena.contarVocales())
console.log("Cadena invertida:", cadena.invertirCadena())
console.log("Es palíndromo:", cadena.esPalindromo())

//➢ Descripción: Implementa la clase Calculadora de modo que se puedan encadenar métodos como sumar, restar, etc. 
class Calculadora {
    constructor() {
        this.resultado = 0
    }

    sum(valor) {
        this.resultado += valor
        return this
    }

    rest(valor) {
        this.resultado -= valor
        return this
    }

    mult(valor) {
        this.resultado *= valor
        return this
    }

    div(valor) {
        if (valor !== 0) {
            this.resultado /= valor
        } else {
            console.log("Error.")
        }
        return this
    }
}

let calculadora = new Calculadora()

let resultado = calculadora.sum(8).rest(1).mult(2).div(2).resultado
console.log( resultado) 
