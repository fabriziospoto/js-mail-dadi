var mailUtente = prompt('Ciao, inserisci la tua mail');

var mail = ['mario@mail.it', 'paolo@mail.it', 'luca@mail.it', 'giovanni@mail.it', 'luisa@mail.it', 'caterina@mail.it', 'beatrice@mail.it', 'giuseppe@mail.it', 'teresa@mail.it', 'roberto@mail.it'];
console.log(mail);

var verified = false

for (var i = 0; i <= mail.length; i++) {
    if (mailUtente == mail[i]) {
verified = true   }
}

if (verified == true) {
    document.getElementById('validation') .innerHTML = 'La tua mail è valida.';
} else {
    document.getElementById('validation') .innerHTML = 'Ci dispiace, la tua mail non è valida.';
}
