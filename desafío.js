//Desafío Entregable N°1

function saludar(nombre){
    let frase = `Hola ${nombre}! ¿Como estas?`;
    document.write(frase)
}

let nombre = prompt("Ingresa Nombre")

if (nombre=="fernando"){
    saludar(nombre) 
}
else{
    alert("adios vaquero/a")
}
console.log('Finalizado')