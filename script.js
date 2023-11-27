/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* In JavaScript sono presenti 8 tipi di datatype, o tipi di valori primitivi, che definiscono che specificità
 ha appunto quel valore che noi abbiamo. Gli otto tipi di datatype sono:
 -null --> quando vogliamo che il valore sia nullo, il contenuto della "scatola" sia vuoto;
 -undefined --> diverso da null, in quanto qua il valore semplicemente non è definito, quindi non lo conosciamo;
 -number --> appunto un numero;
 -string --> per scrivere appunto parole, frasi o numeri stessi, dentro apici(''), virgolette("") o backticks (``) ;
 -boolean --> per definire se il valore sia vero o falso(true or false);
 -symbol --> rappresenta un identificatore univoco;
 -object --> rappresenta un oggetto;
 -bigInt --> è uno speciale tipo numerico che supporta numeri interi di lunghezza arbitraria;

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = 'Simone'
console.log(myName)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let sum = 12 + 20
console.log('la somma tra 12 e 20 è' , sum)

let ix = 12
let iy = 20
let iz = ix + iy
console.log('la somma tra 12 e 20 è' , iz)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = 'Manca' 
console.log('il mio cognome è' , myName)

const myDog = 'Fortunadu'
// myDog = 'Cucciucciu' --> non posso cambiarla perchè CONST è una costante!
console.log('il nome del mio cane è' , myDog)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let subtractionOfTwoNumbers = 4 - x
console.log('la differenza tra 4 e x è' , subtractionOfTwoNumbers) // -8
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john"
let name2 = "John"
console.log('john e John non sono uguali' ,name1 !== name2) // true
console.log('john e John non sono uguali' ,!(name1 !== name2)) //false

//EXTRA:
let name1LowerCase = name1.toLowerCase()
let name2LowerCase = name2.toLowerCase()
console.log(name1 === name2) 
/* SCRIVI QUI LA TUA RISPOSTA */
