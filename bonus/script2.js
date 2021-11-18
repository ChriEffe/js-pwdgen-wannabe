// Richiesta nome utente
let nomeUtente = prompt('Inserisci il tuo nome');
console.log('Nome Utente ' + nomeUtente);

// Richiesta cognome utente
let cognomeUtente = prompt('Inserisci il tuo cognome');
console.log('Cognome Utente ' + cognomeUtente);

// Richiesta colore preferito
let colorePreferito = prompt('Inserisci colore preferito');
console.log('Colore Preferito ' + colorePreferito);

// Numero preferito
let numeroPreferito = prompt('Inserisci numero preferito');
console.log('Numero preferito ' + numeroPreferito);

// Addizione 5
const secondoNumero = 5;
let somma = numeroPreferito + secondoNumero;
console.log(somma);

// Scritto su pagina
document.writeln('Password ' + nomeUtente + cognomeUtente + colorePreferito + somma);