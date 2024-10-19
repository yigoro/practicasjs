//1era clase  07/10
let cliente = "Sebastian Bertolotti";

console.log(cliente);

let usuario;
usuario = "Brenda Sanchez";
usuario = "sol";
const PI = 3.1416;

console.log(usuario);
console.log("vamos a imprimir el tipo de dato que es PI");  
console.log(typeof PI, PI);

let nombre = prompt("Ingrese su nombre")
alert("Hola " + nombre + "!")
console.log(nombre)

//Ejercicio de operaciones matematicas y mostrar pot pantalla una alerta
let numeroA = Number(prompt("ingrese un numero"))
let numeroB = Number(prompt("ingrese otro numero"))

alert("la suma es " + (numeroA + numeroB))
alert("La division de esos numeros es " + (numeroA / numeroB).toFixed(4)) //muestra la cantidad de caracteres que muestra como parte decimal

//2da clase
//En esta parte estamos usando un elemento de index.html manejandolo por el Id
const titulo = document.getElementById("titulo");

titulo.textContent = "JavaScript";
titulo.style.color = "red";
titulo.style.fontSize = "54px";

//3era clase funciones y parámetros. Scope
//La funcion se encuentra en funciones.js

//let resultado = sumar(5, 3); //argumentos 
//console.log(resultado);  // Muestra: 8

//4 Arrays

let numeros =  [11, 200, 13,42, 125, 0, 8, 71];

console.log(numeros);
console.log(numeros[2]);

let frutas = ['manzana', 'banana'];
frutas.push('naranja');
frutas.push('arandanos');
frutas.push('mandarina');
frutas.push('melon');
console.log(frutas);  // Salida: ['manzana', 'banana', 'naranja', 'arandanos','mandarina','melon']

//Eliminamos un item
let frutaEliminadaUltima = frutas.pop();
console.log("El método pop elimina el último item")
console.log("Eliminamos el último item:", frutaEliminadaUltima);

console.log("El método shift elimina el primer item")
let frutaEliminadaPrimera = frutas.shift();
console.log("Eliminamos el primer item:", frutaEliminadaPrimera);

