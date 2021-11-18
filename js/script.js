/*1.  Chiedi all’utente il suo nome,
2.  poi chiedi il suo cognome,
3.  poi chiedi il suo colore preferito
4.  Infine scrivi sulla pagina nomecognomecolorepreferito21*/


// Richiesta nome utente
let nomeUtente = prompt('Inserisci il tuo nome');
console.log('Nome Utente ' + nomeUtente);

// Richiesta cognome utente
let cognomeUtente = prompt('Inserisci il tuo cognome');
console.log('Cognome Utente ' + cognomeUtente);

// Richiesta colore preferito
let colorePreferito = prompt('Inserisci colore preferito');
console.log('Colore Preferito ' + colorePreferito);

// Scritto su pagina
document.writeln('Dati personali ' + nomeUtente + cognomeUtente + colorePreferito);