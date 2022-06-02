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
let numero = prompt('ingresa numero')
for (let i = 1; i <= 12; i++){
    let resultado = i * numero
    console.log('El Resultado es: '+ resultado)
        alert('El resultado es : '+ resultado)     
    }
console.log('Finalizado')

/* function saludar (){
    console.log ('Hola Estudiantes')
}

saludar() */

/* let nombre = prompt('Ingresar Nombre')
alert('Nombre ingresado: '+ nombre)

function solititarNombre() {
    let nombre = prompt('Ingresar Nombre')
    alert('Nombre ingresado: '+ nombre) 
} */

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

    function Persona(name,age,adress){
        //propiedad = valor
        this.name = name
        this.edad = age
        this.direccion = adress
        this.pais = 'USA'
        this.cumpleaños = 0
    }

    const homero = new Persona('Homero',40,'Av Siempreviva 742')

    console.log(homero)