
// desafio 1

let diaSemana = prompt('Que dia de la semana es?;');

if (diaSemana === 'Sabado' || diaSemana === 'Domingo'  ) {
    alert ('Buen fin de semana! ');
} else {
    alert ('Buena semana! ');
}

// desafio 2

let numeroIngresado = prompt ('ingresa un numero positivo o negativo');

if (numeroIngresado > 0 ) {
    alert ('su numero es positivo');
} else if(numeroIngresado < 0 ) {
    alert ('su numero es negativo');
} else {
    alert('el numero es 0');
}

// desafio 3

let puntuacionJuego = 101 ;

if  (puntuacionJuego >= 100) {
console.log('Felicidades, has ganado!');
} else {
    console.log ('Intentalo nuevamente para ganar');
}


// desafio 4

let saldoDeCuenta = 1000 ;
alert(`Tu saldo es de ${saldoDeCuenta}.`) ;

// desafio 5

let nombreDeUser = prompt('Como te llamas?');

alert (` Bienvenido ${nombreDeUser}.`);








