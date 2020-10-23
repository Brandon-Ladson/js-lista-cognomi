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

  cognomi.push(cognomeUtente);

  var i = 0;
  while (i < cognomi.length) {

    cognomi.sort();

    testoDaStampare = testoDaStampare + "<li>" + cognomi[i] + "</li>";

    i++;
  }

  // stampare lista ordinata e posizione in essa
  document.getElementById('lista').innerHTML = testoDaStampare;

  var posizioneNellaLista = cognomi.indexOf(cognomeUtente);

  document.getElementById('posizione').innerHTML = "Sei nella posizione numero: " + ++posizioneNellaLista;

} );
