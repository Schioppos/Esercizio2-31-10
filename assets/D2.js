/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let numero1 = parseFloat(prompt("inserisci il primo numero"))
let numero2 = parseFloat(prompt("inserisci il secondo numero"))
if(numero1>numero2){
  alert(numero1)
}
else{
  alert(numero2)
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let numero5 = parseInt(prompt("Inserisci un numero uguale a 5"))
if (numero5 != 5){
  console.log("not equal")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numero = parseFloat(prompt("Inserisci un numero da dividere per 5:"))
if (numero % 5 === 0){
  console.log(numero + " è perfettamente divisibile per 5.")
}
else{
  console.log(numero + " non è perfettamente divisibile per 5.")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let numIntero1 = parseInt(prompt("Inserisci il primo numero"))
let numIntero2 = parseInt(prompt("Inserisci il secondo numero"))
if(numIntero1 === 8 || numIntero2 === 8 ) {
  console.log("uno dei valori inserito è uguale a 8")
}
else if(numIntero1 + numIntero2 === 8 || numIntero1 - numIntero2 === 8){
  console.log("Il risultato è uguale a 8")
}
else{
  console.log("nessuno dei valori è uguale a 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let saldoTotale = 40
let costiSpedizione = 10

if (saldoTotale > 50 ){
  costiSpedizione = 0
}
 let sommaDaAggiungere = saldoTotale + costiSpedizione

 console.log("Totale saldo: " + saldoTotale)
 console.log("Costo di spedizione: " + costiSpedizione)
 console.log("Importo totale: " + sommaDaAggiungere)
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let saldoTotale2 = 40
let costiSpedizione2 = 10

if (saldoTotale > 50 ){
  costiSpedizione = 0
}
 let scontoBlackFriday = 0.20
 let scontoTotale = saldoTotale2 * scontoBlackFriday 
 let sommaDaAggiungere2 = saldoTotale - scontoTotale + costiSpedizione

 console.log("Totale saldo: " + saldoTotale2)
 console.log("Sconto del Black Friday: " + scontoBlackFriday)
 console.log("Costo di spedizione: " + costiSpedizione2)
 console.log("Importo totale: " + sommaDaAggiungere2)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
