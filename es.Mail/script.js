/*
Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email
*/



//Creo una lista che contiene le mail che possono accedere
const listaMail = [
   'alessio@gmail.com',
   'marco@gmail.com',
   'luigi@gmail.com',
   'lorenzo@gmail.com',
   'asia@gmail.com',
]

let accessoConsentito = false;
let message;

//Creo un ciclo while che mi ripeta la richiesta di inserire la mail, fino a quando non inserisco una mail valida.
while(!accessoConsentito){
   //prompt per la richiesta di inserire la mail.
   let mailInserita = prompt('inserisci la tua mail:').toLowerCase();
   //creo un ciclo 
   for (let i = 0; i < listaMail.length; i++){
      if(mailInserita ==listaMail[i]){

      }
   }
}
