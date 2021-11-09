/**
 * 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
3. Stampare Nome, cognome, età e codice giocatore.
4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.
 */


// 1.

let giocatore = [
    {
     nome: 'Michael',
     cognome: 'Jordan',
     età: 27,
     mediaPunti: randomNumber(),
     perctiri3punti: randomNumber(),
     cod : codice(),
    },
];

console.log(giocatore);


// 3.
const{nome, cognome, età, cod} = giocatore[0];
console.log(nome, cognome, età, cod); 



// 4.

const giocatoriSquadra = [];
for(let i = 0; i < 10; i++){
     const team = {
        nome: 'Michael',
        cognome: 'Jordan',
        età: 27,
        mediaPunti: randomNumber(),
        perctiri3punti: randomNumber(),
        cod : codice(),
     };
     giocatoriSquadra.push(team);
}

console.table(giocatoriSquadra);










/***************************************************
 *               FUNZIONI
 ***************************************************/


// 2.

// generatore codice 3 numeri e 3 lettere random

 function codice(){
    const lettere = 'AFGRTOIUEORPCMNDE';
    const numeri = '234059687124567';
    let codLettere = '';
    let codNumeri  = '';
    for (let i = 0; i < 3; i++) {
        codLettere += lettere.charAt(Math.floor(Math.random()* lettere.length));
        codNumeri += numeri.charAt(Math.floor(Math.random()* numeri.length));
    }
    return codLettere + codNumeri;
} 





// generatore numeri random

function randomNumber(min, max) {
    return Math.floor(Math.random() *(max - min + 1) ) + min;
}
