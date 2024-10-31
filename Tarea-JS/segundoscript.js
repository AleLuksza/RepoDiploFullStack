let ingresados = prompt("Ingrese una lista de tres numeros separados por un espacios:");
let array = ingresados.split(" ")

if ((array[0]) > (array[1]) && (array[0]) > (array[2])) {
    document.write(`El numero mas grande es el ${(array[0])}.`);
} else if ((array[1]) > (array[0]) && (array[1]) > (array[2])) {
    document.write(`El numero mas grande es el ${(array[1])}.`);
} else {
    document.write(`El numero mas grande es el  ${(array[2])}.`)
}