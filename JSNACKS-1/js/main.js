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

let giocatore = 
    {
     nome: 'Michael',
     cognome: 'Jordan',
     età: 27,
     mediaPunti: randomNumber(0, 50),
     perctiri3punti: randomNumber(0, 100),
     cod : generazioneCodice(),
    }


console.table(giocatore);

// 3.
const{nome, cognome, età, cod} = giocatore;
console.log(nome, cognome, età, cod); 



//4. 

const giocatori = [
    {
        nome: 'Lebron',
        cognome: 'James',
        età: 36,
        mediaPunti: randomNumber(0, 50),
        perctiri3punti: randomNumber(0, 100),
        cod : generazioneCodice(),
    },
    {
        nome: 'Kevin',
        cognome: 'Durant',
        età: 33,
        mediaPunti: randomNumber(0, 50),
        perctiri3punti: randomNumber(0, 100),
        cod : generazioneCodice(),
    },
    {
        nome: 'Shaquille',
        cognome: 'ONeil',
        età: 30,
        mediaPunti:randomNumber(0, 50),
        perctiri3punti:  randomNumber(0, 100),
        cod : generazioneCodice(),
    },
    {
        nome: 'Stephen',
        cognome: 'Curry',
        età: 25,
        mediaPunti: randomNumber(0, 50),
        perctiri3punti:  randomNumber(0, 100),
        cod : generazioneCodice(),
    },
    {
        nome: 'James',
        cognome: 'Harden',
        età: 28,
        mediaPunti: randomNumber(0, 50),
        perctiri3punti:  randomNumber(0, 100),
        cod : generazioneCodice(),
    },
    {
        nome: 'Giannis',
        cognome: 'Antetokounmpo',
        età: 32,
        mediaPunti: randomNumber(0, 50),
        perctiri3punti:  randomNumber(0, 100),
        cod : generazioneCodice(),
    },
    {
        nome: 'Kobe',
        cognome: 'Bryant',
        età: 32,
        mediaPunti: randomNumber(0, 50),
        perctiri3punti:  randomNumber(0, 100),
        cod : generazioneCodice(),
    },
    {
        nome: 'Kareem',
        cognome: 'Abdul-Jabbar',
        età: 74,
        mediaPunti: randomNumber(0, 50),
        perctiri3punti:  randomNumber(0, 100),
        cod : generazioneCodice(),
    },
    {
        nome: 'Magic',
        cognome: 'Johnson',
        età: 27,
        mediaPunti: randomNumber(0, 50),
        perctiri3punti:  randomNumber(0, 100),
        cod : generazioneCodice(),
    },
    {
        nome: 'Luka',
        cognome: 'Doncic',
        età: 27,
        mediaPunti: randomNumber(0, 50),
        perctiri3punti:  randomNumber(0, 100),
        cod : generazioneCodice(),
    },
];
console.table(giocatori);

// 5. 

const topGiocatori = giocatori.filter((element) => element.mediaPunti > 35 && element.perctiri3punti > 80);
console.table(topGiocatori);
console.log(topGiocatori.length);








/***************************************************
 *               FUNZIONI
 ***************************************************/


// 2.

// generatore codice 3 numeri e 3 lettere random

 function generazioneCodice(){
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
