class MaterialBase {
    constructor(nombre, escritor, fecha) {
        this._nombre = nombre;
        this._escritor = escritor;
        this._fecha = fecha;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoValor) {
        this._nombre = nuevoValor;
    }
    get escritor() {
        return this._escritor;
    }
    set escritor(nuevoValor) {
        this._escritor = nuevoValor;
    }
    get fecha() {
        return this._fecha;
    }
    set fecha(nuevoValor) {
        return nuevoValor < 0 ? console.log("Fecha incorrecta") : this._fecha = nuevoValor;
    }
    descripcion() {
        return `El material ${this._nombre} del escritor ${this._escritor} escrito en el año ${this._fecha}`;
    }
    antiguedad(añoActual) {
        let antiguedad;
        antiguedad = añoActual - this._fecha;
        return `El material ${this._nombre} tiene una antigüedad de ${antiguedad} años`;
    }
}

let material1 = new MaterialBase("Aprender a Programar", "Juan Perez", 2010);
console.log(material1);
console.log(material1.descripcion());
console.log(material1.antiguedad(2024));

class Libro extends MaterialBase {
    constructor(nombre, escritor, fecha) {
        super(nombre, escritor, fecha);
    }
    descripcion() {
        return `El libro llamado ${this._nombre} escrito en el año ${this._fecha}`;
    }
}

let libro1 = new Libro("Cien Años de Soledad", "Gabriel Garcia Marquez", 1967);
let libro2 = new Libro("La Odisea", "Homero", -800);
let libro3 = new Libro("Crimen y Castigo", "Fiodor Dostoievski", 1866);
console.log(libro1.descripcion());
console.log(libro2.descripcion());
console.log(libro3.descripcion());

class Revista extends MaterialBase {
    constructor(nombre, escritor, fecha) {
        super(nombre, escritor, fecha);
    }
    descripcion() {
        return `La revista llamada ${this._nombre} del escritor ${this._escritor}`;
    }
}

let revista1 = new Revista("National Geographic", "John Doe", 2020);
let revista2 = new Revista("Scientific American", "Jane Smith", 2018);
let revista3 = new Revista("Tech Today", "Alan Turing", 2015);
console.log(revista1.descripcion());
console.log(revista2.descripcion());
console.log(revista3.descripcion());