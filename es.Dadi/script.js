/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//assegno l'estrazione dei numeri random al giocatore e al computer.
let numGiocatore = Math.ceil(Math.random()*6);
let numComputer = Math.ceil(Math.random()*6);

//preimposto il messaggio che stabilisce il vincitore su "hai perso"
let message = 'Hai perso';

//messaggi di "giocata" del giocatore o del computer
console.log('Giocatore tira' + ' ' + numGiocatore);
console.log('Computer tira' + ' ' + numComputer);

//condizioni di vittoria o pareggio
if(numGiocatore == numComputer){
   message = 'Pareggio';
} else if(numGiocatore > numComputer){
   message = 'Hai Vinto';
}

console.log(message);