/* let pc1 = {
    nombre: "DaltoPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio:"1TB"
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

let frase =`el nombre de mi pc es: <b>${nombre}<b> <br>
            el procesador es: <b>${procesador}<b> <br>
            la memoria ram es: <b>${ram}<b> <br>
            el espacio e disco es de <b>${espacio}<b>`;

document.write(frase); */

/* let numero = 0;

while(numero <100){
        numero++;
        document.write(numero);
        if(numero==10){
            break;
    }
} */

array1 = ["maría","josefa","roberta"];
array2 = ["pedro","marcelo",array1,"josefina"];

for (let array in array2){
    if(array == 2){
        for (let array of array1){
            continue
            document.write(array + "<br>");
        }
    }else{
          document.write(array2[array] + "<br>");  
        }
    }
