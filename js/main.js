/**
 * Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato”o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS:
All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2=> tra 1 e 50
 */

var difficulty;
var level = prompt('Scegli il livello di difficoltà:\n- Facile\n- Normale\n- Difficile')
           .trim()
           .toLowerCase();

while (level != ('facile' && 'normale' && 'difficile') ) {
    var level = prompt('Comando non valido, riprova:\n- Facile\n- Normale\n- Difficile')
               .trim()
               .toLowerCase();
}

switch (level) {
    case 'facile':
        difficulty = 100;
        break;
    
    case 'normale':
        difficulty = 80;
        break;

    case 'difficile':
        difficulty = 50;
        break;

    default:
        difficulty = 100;
}

var bombs = [];
randomCpu(bombs, 1, difficulty);
console.log(bombs);



/* Functions */

function randomCpu (array, min, max) {
    
    while (array.length < 16) {
        var number = Math.floor( Math.random() * (max - min) + min );

        if ( !array.includes(number) ) {
            array.push(number);
        }
    }
}