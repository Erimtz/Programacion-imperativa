// metodo length
let mensaje = "Gran día para practicar Javascript";
console.log(mensaje.length);

// metodo indexOf()
console.log(mensaje.indexOf('día'));
// metodo slice()
console.log(mensaje.slice(0, 24));
console.log(mensaje);
// metodo trim()
console.log(mensaje.trim());
// metodo split()
console.log(mensaje.split(' '));
// replace
console.log(mensaje.replace('Javascript','todo'));
console.log(mensaje);

// Arrays
let comida = ['Pizza','Hamburguesa', 'Helado'];
let pizza = ['queso','salsa', 'tomate', 'albahaca']
// Daro concreto de un array 
console.log(pizza);

// Arrays dentro de arrays
console.log(comida[0][3]);

// metodos array 
// push 
let notas = [3, 5, 10, 9, 7 , 8, 8 , 8];

notas.push (1);
notas.push (2);
notas.push(4);

let elUltimo = notas.pop();

console.log(notas);

// shift y inshift
let calificacion = [3, 5 ,7, 56, 34];

calificacion.shift();
calificacion.shift();

calificacion.unshift(1);

calificacion.push(4);
calificacion.push(4);

calificacion.pop();

console.log(calificacion);

// indexOf
let numeros = [4, 6, 7, 8, 9, 8];
let posisicionDelOcho = numeros.indexOf(8);

if(posisicionDelOcho != -1){
    console.log('Lo encontré');
}

// lastIndexOf

let pisos = [1, 2, 3, 4, 5, 6];
let posicionDelSeis = pisos.lastIndexOf(6);

console.log(posicionDelSeis);

// join

let rango = [2, 4, 6, 8, 10];

let sumaRango = rango.join('**');

console.log(sumaRango);




