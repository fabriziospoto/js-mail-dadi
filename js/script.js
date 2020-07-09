// var mailUtente = prompt('Ciao, inserisci la tua mail');
//
// var mail = ['mario@mail.it', 'paolo@mail.it', 'luca@mail.it', 'giovanni@mail.it', 'luisa@mail.it', 'caterina@mail.it', 'beatrice@mail.it', 'giuseppe@mail.it', 'teresa@mail.it', 'roberto@mail.it'];
// console.log(mail);
//
// var verified = false
//
// for (var i = 0; i <= mail.length; i++) {
//     if (mailUtente == mail[i]) {
// verified = true   }
// }
//
// if (verified == true) {
//     document.getElementById('validation') .innerHTML = 'La tua mail è valida.';
// } else {
//     document.getElementById('validation') .innerHTML = 'Ci dispiace, la tua mail non è valida.';
// }

// *********Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

alert('Tira il dado');
var dadoUtente = Math.floor(Math.random()* 6) + 1;
console.log(dadoUtente);
alert('E\' uscito il numero ' + dadoUtente);
alert('Ora tiro io');
var dadoMio = Math.floor(Math.random()* 6) + 1;
console.log(dadoMio);
alert('E\' uscito il numero ' + dadoMio);

if (dadoUtente > dadoMio) {
    alert('Complimenti! Hai Vinto!');
} else if (dadoUtente == dadoMio) {
    alert('Abbiamo pareggiato...poco male!');
} else {
    alert('Mi dispiace, ho vinto io!');
}
