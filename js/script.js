/*
1. chiedi all’utente il cognome
2. inseriscilo in un array dove sono presenti già altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova
*/


var outputList = document.getElementsByClassName('list')[0];

// 1. chiedi all’utente il cognome
var lastName = prompt('inserisci il tuo cognome con la prima lettera maiuscola');

// 2. inseriscilo in un array dove sono presenti già altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var lastNameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
lastNameList.push(lastName);

//3. stampa la lista ordinata alfabeticamente
// Ordino il mio array di cognomi
lastNameListOrdered = lastNameList.sort();

// Stampo l'elenco in una lista
var listHtml = '';

for (var i = 0; i < lastNameListOrdered.length ; i++){
    listHtml += '<li>' + lastNameListOrdered[i] + '</li>';
}

outputList.innerHTML = listHtml;


// 4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova
var outputPosition = document.getElementById('position');
var position = lastNameListOrdered.indexOf(lastName) + 1;

outputPosition.innerHTML = 'La tua posizione in elenco è: ' + position;




// Soluzione alternativa per il punto 3
/*
var listOutput = document.getElementById("myList");
var lastNameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
var lastName = prompt('inserisci il tuo cognome');
lastNameList.push(lastName);

lastNameListOrdered = lastNameList.sort();

lastNameListOrdered.forEach((item)=>{
  var li = document.createElement("li");
  li.innerText = item;
  listOutput.appendChild(li);
})
*/


