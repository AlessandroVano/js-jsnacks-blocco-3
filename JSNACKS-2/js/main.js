/**
 * A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
 */




const number = [1, 2, 3 , 4, 5];
console.log(number);



console.log('____________ POTENZE AL QUADRATO DI OGNI NUMERO ____________ ')


const potenzeNumeriAlQuadrato = number.map(element => element * element);
console.log(potenzeNumeriAlQuadrato);