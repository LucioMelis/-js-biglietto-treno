/*Il programma dovrà chiedere all'utente:
il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo).
 Questo richiederà un minimo di ricerca.*/
console.log('Js Ok');

// Variabile Numero chilometri
const kilometresUser = prompt('Indica il numero dei chilometri che vuoi percorrere');
// Variabile Anni dell'utente 
const ageUser = prompt('Quanti anni hai?');
// Variabile sconto minorenni
const discountMinors = 20;
// Variabile sconto over 65
const discountOver65 = 40;
// Variabile prezzo del biglietto 
const ticketPrice = kilometresUser * 0.21;

if (ageUser >= 18 && ageUser >= 65) {
    console.log('Sei Maggiorenne');
    const priceFinal = ticketPrice - discountMinors;
    console.log(priceFinal);
} else {
    console.log('Sei Minorenne');
}

