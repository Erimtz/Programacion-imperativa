let edadMinima = 21;
console.log(edadMinima);

let capacidadMaxima = 800;
console.log(capacidadMaxima);

let uno = 23;
let dos = uno;
console.log(uno);

// Mensaje con variables
let mensaje = {
    nombre: 'Erika',
    edad: 22,
    cumpleanos: 'Febrero',
    ciudad: 'Bogota',
    ocupacion: 'Estudiante',
    hobbie: 'Pintar',
}
console.log(mensaje);

// Calculadora de edad
let edad1 = 20;
let edad2 = 25;
let edad3 = 30;

function calculadoraEdad(){
    return edad1 * 365 + edad2 * 365 + edad3 * 365;
}
console.log(calculadoraEdad());

// Suma de Valores
let num1 = 20;
let num2 = 3;
let resultado = num1 + num2;

console.log(resultado);

// Calculadora de abastecimiento de por vida
let edad = 26;
let edadMaxima = 90;
let snack = 'Chocolate';
let snackAlDia = 5;
let precioSnack = 20.04;

function calcularSnacks(){
    return (edadMaxima - edad) * snackAlDia * precioSnack;
}

console.log(calcularSnacks());

// Ejercicio 2
let diasViaje = 10;
let presupuesto = 300.45;
let comida = 30;

function calcularGastoComida(){
    console.log("Podés gastar" + " " + presupuesto/comida + " " + "en cada comida para que te alcance la plata durante los" + " " + diasViaje + " días de viaje");
    return presupuesto / comida;  
}
console.log(calcularGastoComida());

//Calcualdora IMC
let nicolas = {
    nombre: 'Nicolás',
    apellido: 'López',
    edad: 27,
    peso: 83.5,
    altura: 170,
    prepaga: 'Swiss Medical',
}

let esteban = {
    nombre: 'Esteban',
    apellido: 'Piazza',
    edad: 28,
    peso: 80.1,
    altura: 176,
    prepaga: 'OSDE',
}

let jose = {
    nombre: 'José',
    apellido: 'Fermoso',
    edad: 33,
    peso: 63.7,
    altura: 153,
    prepaga: null,
}

let juana = {
    nombre: 'Juana',
    apellido: 'Fernández',
    edad: 26,
    peso: 55.0,
    altura: 162,
    prepaga: 'Omint',
}

let erika = {
    nombre: 'Erika',
    apellido: 'Martinez',
    edad: 26,
    peso: 57.0,
    altura: 163,
    prepaga: null,
}

function imc(persona){
  let imc = (persona.altura*2) / persona.peso;
 console.log(persona.nombre + " " + persona.apellido + " " + "tiene" + " " + persona.edad + " " + "años y su índice de masa corporal es de" + " " + imc );
}

console.log(imc(erika));

// Modulo 

console.log(10 % 2);

// Incremento
let numero = 6;
console.log( ++numero);

// Decremento
let otroNumero = 10;
console.log( --otroNumero);
 
//comparacion simple == permite saber si un valor es igual a otr, respuesta dato booleano
console.log( 5 =="5");

//comparacion estricta compara valor y tipo de dato === , respuesta booleano
console.log(5 === "5");

// Desigualdad estricta es distinto el valor y tipo de dato ej: 5!=="5";


// Desigualdad simple es distinto el valor ej: 5!="5";

// Ejercicio calculadora
// Suma
function sumar(a, b){
    return a + b;
}

console.log(4 + 4);

// Resta
function resta(a,b){
    return a - b
}

console.log(10 - 7);

// Multipllicación
function multiplicacion(a, b) {
    return a * b;
}
console.log( 5 * 20);

// División
function division(a, b) {
    return a / b;
}
console.log(30 / 5);

// calculadora Nivel II
function tester() {
    return (a + b) - b - c;
}
console.log((10 + 3) - 7 -2);

// Calculadora numero III
function cuadradoDeUnNumero(a) {
    return a*a;
}
console.log(8 * 8);

//2
function promedioDeTresNumeros(a, b, c) {
    return (a * b) / c;
}
console.log(( 30 * 9 ) / 2 );

//3
function calcularPorcentaje() {
    let porcentaje = (a * b) / c;
    return (600*20 / 5);
}
console.log( 600*20/ 5);

// 4
function generadorDePorcentaje() {
    let porc = (3 % 300);
    return (porc);
}
console.log(generadorDePorcentaje());

// Que devulve cada expresion
// Ejercicio montaña rusa


// if - else if - else
let clima = 'Soleado';
let dia = 'Martes'

if (clima == 'Soleado' && dia == 'Domingo'){
    console.log('Es buen día para salir');
}else if (clima == 'Soleado' && dia == 'Lunes'){
      console.log('Puedo ir a cine');
}else{
    console.log('Mejor me quedo en casa');
}

// if ternario
let fruta = 'Naranja';

let resultado = fruta == 'Manzana'?'Buenísismo, me gustan las manzanas':'Ufa, quería manzana';
console.log(resultado);

console.log("10" - 7);
let edad = 18; 
    if (edad) {
        console.log("es mayor a 21, puede pasar");
    }else{
        console.log("no tiene la suficiente edad para ingresar");
    }
