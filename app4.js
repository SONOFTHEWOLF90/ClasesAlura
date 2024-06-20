// desafio 1 

console.log('Bienvenido');

// desafio 2 

let nombreUno = Josue;

console.log(`Hola,${nombreUno}.`);

// desafio 3 

let nombreDos = Josue;
alert(`Hola, ${nombreDos}`);

// desafio 4 

let lenguajeProgramacion = prompt ('Cual es el lenguaje de programacion que mas te gusta');

console.log(lenguajeProgramacion);

// desafio 5 

let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2 ;

console.log(`la suma de ${valor1} y ${valor2} es igual a ${resultado}.`);


// desafio 6

let valorUno = 40;
let valorDOs = 30;
let resultadoSeis = valorUno - valorDOs;

console.log(` la diferencia entre ${valorUno} y ${valorDOs} es igual a ${resultadoSeis}`);

// desafio 7 

let edadUser = prompt ('Cual es su edad ');

if ( edadUser >17 ) {
    console.log( 'Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

// desafio 8 
 
// parseFloat  permite convertir cadenas que representan números decimales en valores de punto flotante

let numero = parseFloat(prompt('Escribe un valor numerico'));

if (numero > 0) {
    console.log ('su numero es positivo');
} else if (numero < 0 ) {
    console.log (' su numero es negativo');
} else {
    console.log('su numero es cero');
}

//desafio 9 

let mostrarNumero = 1;

while ( mostrarNumero <= 10){
    console.log(mostrarNumero);
    mostrarNumero ++ ;
}

// desafio 10 

let nota = 3;

if (nota >= 7) {
    console.log( 'Aprobado');
} else {
        console.log('Reprobado');
}

 // desafio 11

 let numeroAleatorio = Math.random();
 console.log(numeroAleatorio);

 //desafio 12 

 let numeroRandom = parseInt(Math.random()*10) + 1;
console.log(numeroRandom);

// desafio 13 

let numeroRandom2 = parseInt(Math.random()*1000) + 1; 
console.log( numeroRandom2);