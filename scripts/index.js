/* var fecha = "Lunes"
let edad = 25
const nombre = "Alex" */

/* promt */

/* console.log(nombre)

let a = 10
let b = 20

let suma = a + b
console.log(suma)

let Color = "verde" */

/* promt para caja ingresar texto */

/* if(Color == "rojo"){
    console.log("el color es rojo")
}else{
    console.log("el color No es rojo")
}

let numero = 5
let condicion = 5 > 1

if(numero == 5){
    console.log("es 5");
}
if(condicion){
    console.log("condicion verdadera")
}

let c = 10
let d = 50

if (c > 0 && d < 100){
console.log("Correcto")
}else{
    console.log("Incorrecto")
} */

/* 0-1-2-3-4-5-6-7-8-9 */

/* For = simere variable entera */

/* for(let index = 0;index < 10;index++){
    console.log(index);
} */

/* let numero = 10
for (let index = 1; index <=12; index++){
    let resultado = numero * index
    console.log("Resultado: index + ' - ' + resultado")
} */



/* Break

for (let index = 0; index < 20; index++){
    if(index == 10){
        break
    }
    console.log(index)
} */

/* Continue

for (let index = 0; index < 20; index++){
    if(index == 10){
        continue
    }
    console.log(index)
}  */

/* while */

/* let index = 0
while (index < 10){
    console.log(index)
    index++
} */

/* let entrada = prompt('Ingresa la clave')

while(entrada === 'coderhouse'){
    entrada = prompt('Ingresa nuevamente la clave')
}
console.log('Finalizado') */

/* Do while */

/* let repetir = false
do {
    console.log('Solo una vez')
} while (repetir);

console.log('Finalizado') */

/* Switch */

/* let entrada = promt('Ingresa la clave')
while(entrada !== 'salir'){
    switch(entrada){
        case 'coderhouse':
            alert('coderhouse')
            break;
        case 'CODERHOUSE':
            alert('coderhouse')
            break;
        case 'CoderHouse' :
            alert('CoderHouse')
            break;
        default:
            alert('Error')
            break;
    }
    entrada = prompt('Ingresa nuevamente  la clave')
} */

/* desafio */
 /* Tomar i & y para crear una tabla de multiplicacion */
/* let numero = prompt('ingresa numero')
for (let i = 1; i <= 12; i++){
    let resultado = i * numero
    console.log('El Resultado es: '+ resultado)
        alert('El resultado es : '+ resultado)     
    }
console.log('Finalizado')
 */
/* function saludar (){
    console.log ('Hola Estudiantes')
}

saludar() */

/* let nombre = prompt('Ingresar Nombre')
alert('Nombre ingresado: '+ nombre)

function solititarNombre() {
    let nombre = prompt('Ingresar Nombre')
    alert('Nombre ingresado: '+ nombre) 
}
 */
/* function solititarNombre(nombre) {
    alert('Nombre ingresado: '+ nombre)
}

solicitarNombre ('alex')
solicitarNombre ('Fernando')
solicitarNombre ('alejandro') */

/* function solititarNombre(nombre='') {
    alert('Nombre ingresado: '+ nombre)
}

solicitarNombre () */

/* function sumar(parametroA, parametroB){
    let resultado = parametroA + parametroB
    console.log ('Resultado es: '+ resultado)
    return resultado
}
function restar(parametroA, parametroB){
    let resultado = parametroA - parametroB
    console.log ('Resultado es: '+ resultado)
    return resultado
}
function multiplicar(parametroA, parametroB){
    let resultado = parametroA * parametroB
    console.log ('Resultado es: '+ resultado)
    return resultado
}
function dividir(parametroA, parametroB){
    let resultado = parametroA / parametroB
    console.log ('Resultado es: '+ resultado)
    return resultado
}


sumar(10.5)

function sumar(parametroA, parametroB){
    let rnumero = prompt('Ingresa un numero')
    return parseInt(numero)
}

function calculadora(numeroA,numeroB,operacion)
    switch(operacion){
        case '+':
            return sumar(numeroA,numeroB)
            break;
        case '-':
            return restar(numeroA,numeroB)
            break;
        case '*':
            return multiplicar(numeroA,numeroB)
            break;
        case '/':
            return dividir(numeroZ,numeroB)
            break;
    }

    let a = solicitarNumero()
    let b = solicitarNumero()

    let _sum = sumar(a,b)

    console.log('_SUM: ' + _sum)

    const suma = (a, b) */

    /* CALLBACKS */

    /* const test = (callback) => {
        let resultado = callback
        console.log(resultado)
    }

    test(sumar(1,2)) */

// Clase objetos //

    /* const persona ={
        name:'Fernando',
        age: 34,
        address:'mandzana 10 sitio 3',
        'full.name':'Fernando Banares'
    }

    console.log(persona.age)
    console.log(persona['full.name']) */

    /* const persona ={
        name:'Fernando',
        age: 34,
        address:'mandzana 10 sitio 3',
    }
    console.log(persona);
    persona.name = "Andre"
    persona["age"] = 30
    console.log(persona); */

    /* function Persona(name,age,adress){
        //propiedad = valor
        this.name = name
        this.edad = age
        this.direccion = adress
        this.pais = 'USA'
        this.cumpleaños = ''
    }

    const homero = new Persona('Homero',40,'Av Siempreviva 742')

    console.log(homero) */

    // Clases

/* const IVA = 18
function Producto (name, price, description){
    this.name = name
    this.price = price
    this.description = description
    this.clculatePriceIVA = () => { return (this.price) + ((this.price * IVA) / 100)}
}
class Product{
    constructor(name, price, description){
        this.name = name
        this.price = price
        this.description = description
    }
    calculatePriceIVA(){
        return(this.price) + ((this.price * IVA) / 100)
    }
    getName(){
        return this.name
    }
    getPrice(){
        return this.price
    }
}

const arroz = new Product ('Arroz chaufan', 3.5,'Arroz..')
console.log(arroz.name)
console.log(arroz.price)
console.log(arroz.calculatePriceIVA())

const azucar = new Product ('Azucar rubia', 3, 'Azucar..')
console.log(azucar.name)
console.log(azucar.price)
console.log(azucar.calculatePriceIVA())
 */
// Clase 6 Arrays o listas //

/* const lista = [1,2,3,4,5]
let a = lista[0]
let b = lista[2]
console.log(lista[0])
console.log(lista[1]) */

/* const lista = [1,false,'A','Alex',25, { name: 'Coderhouse'}, [1,2,3]]
for (let index = 0; index < 7; index++){
    console.log('Lista: '+ lista[index])
} */

/* console.log(lista.length) */

//Agregar elementos push y unshift

/* const array = [1,2,3]

console.log(array)
array.push('10')
console.log(array)
array.unshift('A')
console.log(array) */

//Retirar elementos push y pop

/* const array = [1,2,3]

console.log(array)
array.push('10')
console.log(array)
array.unshift('A')
console.log(array)
array.shift()
console.log(array)
array.pop()
console.log(array) */

// Splice -- eliminar valores de una lista

/* const lista = [1,false,'A','Alex',25, { name: 'Coderhouse'}, [1,2,3]]

console.log(lista)
lista.splice(2,3)
console.log(lista) */

// Join--generar un string con los parametros del array
/* const lista = [1,false,'A','Alex',25, { name: 'Coderhouse'}, [1,2,3]] */
/* console.log(lista.join('--')) */

// Concat-- Combinar dos arrays en un único array
/* const perros = ['olf', 'caca']
const gatos = ['mishi', 'diana', 'raul']

const mascotas = perros.concat(gatos)
console.log(mascotas) */

// Slice
/* console.log(lista.slice(2,4)) */

// indexof--indica la posición de un valor en especifico
/* let pos = lista.indexOf(25)
console.log(lista.splice(pos,1)) */

// Includes--

/* console.log(lista.includes(10))
console.log(lista.includes(25)) */

//Reverse--revertir una lista

/* lista.reverse()
console.log(lista) */

// buscar en youtube
//.find
//.filter
//.map
//.reduce
//.findindexof

//Desafío Entregable N°1

/* let nota1, nota2, nota3
let dato1, dato2, dato3, media
nota1 =prompt("Ingresa nota 1")
nota1 = parseInt(nota1)
if (dato1)
nota2 =prompt("Ingresa nota 2")
nota2 = parseInt(dato2)
nota3 =prompt("Ingresa nota 3")
nota3 = parseInt(dato3)

media = (nota1 + nota2 + nota3)/3

if(media>=4){
    alert('Aprobado');
}
else{
    alert('Reprobado');
}

console.log('Finalizado') */

//Carrito de compras

/* class CarritoDeCompras {
    constructor() {
        this.productos = []
        this.name = ''
        this.total = 0
    }
    setName(value) {
        this.name = value
    }

    addProduct(product) {
        this.productos.push(product)
    }

    removeLastProduct() {
        this.productos.pop()
    }

    removeFirstProduct() {
        this.productos.shift()
    }

    getTotal() {
        for (const A of this.productos) {
            console.log(A)
            this.total = this.total + A.price
        }
        console.log('---------');
        for (let index = 0; index < this.productos.length; index++) {
            const producto = this.productos[index]
            console.log(producto);
            this.total = producto.price + this.total 
        }
        
        // console.log(this.total)
        // 0 producto =  {name:'Arroz',price:3}
        // 1 producto =  {name:'Azucar',price:3}
        // 2 producto =  {name:'Soda',price:3}
        // 3 producto =  {name:'Pollo',price:3}
        // 4 producto =  {name:'Carne',price:3}

    }
}
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const cliente = new CarritoDeCompras()
cliente.setName('Alex Paredes')

const p1 = new Product('Arroz', 3)
const p2 = new Product('Azucar', 2)
const p3 = new Product('Soda', 5)
const p4 = new Product('Pollo', 10)
const p5 = new Product('Carne', 15)

cliente.addProduct(p1)
cliente.addProduct(p2)
cliente.addProduct(p3)
cliente.addProduct(p4)
cliente.addProduct(p5)
cliente.getTotal() */

// after

/* class Producto {
    constructor(nombre, precio, cantidad){
        this.nomre = nombre
        this.precio = precio
    }
    mostrarProducto(){}
}
// cuando se escribe new y la clase se invoca al constructor
const producto1 = new Producto('Pizza Muzarella', 1020, 2);

const producto2 = new Producto('Sandwish de Bondiola', 900, 1);

const producto3 = new Producto('Papas Chedar', 700, 1);

class DetallePedido{
    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    //metodo o funcion
    calcularSubtotal(){
        let subtotal = this.producto.precio * this.cantidad;
        return subtotal;
    }
    mostrarDetalle(){}
}

const detallePedido1 = new DetallePedido(producto1, 2);
const detallePedido2 = new DetallePedido(producto2, 2);
const detallePedido3 = new DetallePedido(producto3, 2);
// solo para visualizarlo en la consola
console.log(detallePedido1, detallePedido2, detallePedido3)

class Pedido{
    constructor(fecha, detalles){
        this.fecha = fecha;
        this.detalles = detalles;
    }
    calcularTotal(){
        // usar for of para ir acumulando el pedido
        let total = 0;
        for(const detalle of this.detalles){
            total = total + detalle.calcularSubtotal();
    }
    mostrarPedido8(){}
}

const array = [];
array.push(detallePedido1);
array.push(detallePedido2);
array.push(detallePedido3);

const pedido1 = new Pedido(new Date(), array);

console.log(pedido1.calcularTotal()); */