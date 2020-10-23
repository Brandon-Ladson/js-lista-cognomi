// chiede all'utente il suo COGNOME
var cognomeUtente;

// definire lista di cognimi già registrati
var cognomi = ["Pagani", "Ferrari", "Lamborghini", "Dallara", "Koenigsegg"];

// variabile di appoggio
var testoDaStampare = "";

// aggiungere il cognome dell'utente nella lista
var bottoneLista = document.getElementById('bottone')

bottoneLista.addEventListener('click',
 function() {

  cognomeUtente = document.getElementById('tuocognome').value;
  console.log("è: " + cognomeUtente);

  cognomi.push(cognomeUtente);
  console.log(cognomi);

  var i = 0;
  while (i < cognomi.length) {

    cognomi.sort();

    testoDaStampare = testoDaStampare + "<li>" + cognomi[i] + "</li>";

    i++;
  }

  // cognomi.sort();

  document.getElementById('lista').innerHTML = testoDaStampare;

} );

// ordinare in ordine alfabetico i cognomi
