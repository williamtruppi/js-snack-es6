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

/* let sommaArray = [];
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

console.log(`La somma è ${somma}`); */

/* JSNACK 4 
In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa. */

/* const invitatiGatsby = ["Jerry Scotti", "Mara Maionchi", "Rocco Siffredi"];
let invitato = prompt("Inserisci il tuo nome");

for(i = 0; i < invitatiGatsby.length; i++){
  if (invitato === invitatiGatsby[i]){
    console.log(`Benvenuto ${invitato} sei in lista`);
    break;
  } else {
    console.log(`Mi dispiace ${invitato}, NON sei in lista`);
  }
}

if (invitatiGatsby.includes(invitato)){
  console.log(`Benvenuto ${invitato} sei in lista`);
} else {
  console.log(`Mi dispiace ${invitato}, NON sei in lista`);
} */



/* JSNACK 5
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array. */

/* let dispariArray = [];
let userNumber;

do{

  userNumber = Number(prompt("Inserisci un numero"));
  while (isNaN(userNumber)){
    userNumber = Number(prompt("Per favore inserisci un numero"));
  } 

  if (userNumber % 2 != 0) {
    dispariArray.push(userNumber);
  }

} while (dispariArray.length < 6)

console.log(`Ecco il tuo array di numeri dispari --> ${dispariArray}`);
 */

 

/* JSNACK 6
Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente. */

/* let numUser = Number(prompt("Quanti numeri vuoi inserire?"));
let result;

for(let i = 1; i <= numUser; i++){
  result = Math.pow(i, 3);
  console.log(`Il cubo di ${i} è ${result}`);
}
 */


/* JSnack 7
Stampa le potenze di 2 fino a 1000. */

/* let total;

let i = 0;
do {
  total = Math.pow(2, i);
  console.log(`Due alla ${i}a è ${total}`);
  i++;
} while (total < 1000); */


/* JSnack 8
Chiedi un numero di 4 cifre all’utente e calcola la somma
di tutte le cifre che compongono il numero. */

/* const userNumber = prompt("Inserisci un numero di 4 cifre");
console.log(userNumber);
let sum = 0;
let numberArray = [];

for (let i = 0; i < userNumber.length; i++){
  let n = Number(userNumber[i]);
  numberArray.push(n);
  sum += numberArray[i];
}

console.log(numberArray);
console.log(sum); */

/* JSnack 9
Calcola la somma e la media dei primi 10 numeri. */

let sum = 0;
let average = 0;


for (let i = 1; i <= 10; i++){
  sum = sum + i;
}

console.log(sum);

average = sum / 10;

console.log(average);