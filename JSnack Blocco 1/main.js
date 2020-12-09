/* JSnack blocco 1 */


/* JSNACK 1
L’utente inserisce due numeri in successione, con due
prompt. Il software stampa il maggiore. */

/* let num1 = Number(prompt("Inserisci il primo numero"));
let num2 = Number(prompt("Inserisci il secondo numero"));

if (num1 < num2){
  console.log(`${num2} è maggiore di ${num1}`);
} else {
  console.log(`${num1} è maggiore di ${num2}`);
} */

/* JSNACK 2
L’utente inserisce due parole in successione, con due
prompt. Il software stampa prima la parola più corta, poi la
parola più lunga. */

/* const word1 = prompt("Inserisci la prima parola");
const word2 = prompt("Inserisci la seconda parola");

if (word1.length < word2.length){
  console.log(`La parola più corta è ${word1} poiché è lunga ${word1.length}caratteri`);
  console.log(`La parola più LUNGA è ${word2} poiché è lunga ${word2.length}caratteri`);
} else {
  console.log(`La parola più LUNGA è ${word1} poiché è lunga ${word1.length}caratteri`);
  console.log(`La parola più corta è ${word2} poiché è lunga ${word2.length}caratteri`);
} */

/* JSNACK 3
Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while. */

let sommaArray = [];
let userNumber;
let somma = 0;

do{
  userNumber = Number(prompt("Inserisci un numero"));
  while (isNaN(userNumber)){
    userNumber = Number(prompt("Per favore inserisci un numero"));
  } 
  sommaArray.push(userNumber);
} while (sommaArray.length < 5)

for(i = 0; i < sommaArray.length; i++){
  somma = somma + sommaArray[i];
}

console.log(`La somma è ${somma}`);

/* JSNACK 4 
In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa. */