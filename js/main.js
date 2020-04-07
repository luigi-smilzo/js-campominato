/********************************************************************************************************************************************
 * Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
 * In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
 * L’utente non può inserire più volte lo stesso numero.
 * Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina,
 * altrimenti si continua chiedendo all’utente un altro numero.
 * La partita termina quando il giocatore inserisce un numero “vietato”o raggiunge il numero massimo possibile di numeri consentiti.
 * Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
 * 
 *  BONUS:
 * All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
 * con difficoltà 0 => tra 1 e 100
 * con difficoltà 1 =>  tra 1 e 80
 * con difficoltà 2=> tra 1 e 50
 *******************************************************************************************************************************************/



 /* REFERENCES */

var bombs = [];
var playerInputs = [];
var difficulty = 0;
var level = prompt('Scegli il livello di difficoltà:\n- Facile\n- Normale\n- Difficile')
           .trim()
           .toLowerCase();


/* MAIN FUNCTIONALITY */

selectDifficulty(level);

generateBombs(bombs, 1, difficulty);

playLoop();

console.log('+-+-+ GAME OVER +-+-+');
console.log('Bombe:', bombs);
endResult();
console.log('Hai totalizzato', playerInputs.length, 'punti');


/* FUNCTIONS */

/* Validation utilities */

function validateInput (input) {
    while ( (input < 1) || (input > difficulty) || (isNaN(input)) ) {
        var input = parseInt( prompt('Inserimento non valido. Inserisci un numero da 1 a ' + difficulty) );
    }
}

function validateLevel (level) {
    while (level != 'facile' && level != 'normale' && level != 'difficile' ) {
        var level = prompt('Comando non valido, riprova:\n- Facile\n- Normale\n- Difficile')
                   .trim()
                   .toLowerCase();
    }
}


/* Setup functions */

function selectDifficulty (level) {
    
    validateLevel (level);

    switch (level) {
        case 'normale':
            difficulty += 80;
            break;
    
        case 'difficile':
            difficulty += 50;
            break;
    
        default:
            difficulty += 100;
    }
}

function generateBombs (array, min, max) {
    
    while (array.length < 16) {
        var number = Math.floor( Math.random() * (max - min) + min ) + 1;

        if ( !array.includes(number) ) {
            array.push(number);
        }
    }
}


/* Main game functions */

function playLoop () {

    while ( playerInputs.length < (difficulty - 16) ) {
        var input = parseInt( prompt('Inserisci un numero da 1 a ' + difficulty) );
        validateInput(input);
    
        if ( bombs.includes(input) ) {
            console.error('Sei esploso, ouch!!!');
            break
        } else if ( playerInputs.includes(input) ) {
            var input = parseInt( prompt('Hai già inserito questo numero. Inseriscine un altro da 1 a ' + difficulty) );
            validateInput(input);
        } else {
            playerInputs.push(input);
        }
    }
}

function endResult () {
    
    if ( playerInputs.length == (difficulty - 16) ) {
        console.log('Hai evitato tutte le bombe e sei vivo. Yay');
    } else {
        console.log('Sei morto');
    }
}
