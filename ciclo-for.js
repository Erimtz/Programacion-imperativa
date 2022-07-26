for (let i = 0; i<10; i++){
    console.log('El valor de i es igual a: ' + i);
};

for (let vuelta = 0; vuelta <=5; vuelta++){
    console.log('Dando la vuelta número ' + vuelta);
};

function loro(texto) {
    for (i = 1; i <= 5; i++){
        console.log('Hola');
    }
}

function noParesDeContarImparesHasta(numero) {
    for (i = 1; i <= 3; i--){
        console.log(noParesDeContarImparesHasta(numero));
    }
}

let ronda = 1
while(ronda <= 5) {
console.log('Dando la vuelta número' + ronda);
ronda++ //al final de cada vuelta sumara 1 a vue
lta
};

//let vuelta = 5
do{
    console.log('Dando la vuelta número' + vuelta);
    vuelta++ // Se suma 1 a vuelta por lo tanto vuelta = 6
} while (vuelta <= 5); // al vuelta ser 6 la condición retorna false y se termina el bloque de código


i=0;

n1=parseInt(prompt('Numero introducido :'));

while (i <= 10) {
    document.write('<br>' +n1+'*'+i+'='+(n1*i));
    i++
}