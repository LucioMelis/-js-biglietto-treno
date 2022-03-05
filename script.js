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
const kilometerUser = parseInt(prompt('Indica il numero dei chilometri che vuoi percorrere'));
// Variabile Anni dell'utente 
const ageUser = parseInt(prompt('Quanti anni hai?'));
// Variabile prezzo del biglietto 
const ticketPrice = 0.21 * kilometerUser;
// Variabile sconto minorenni
const discountMinors = ticketPrice * 20 / 100;
// Variabile sconto over 65
const discountOver65 = ticketPrice * 40 / 100;
// Variabile prezzo finale 
let priceFinal;

if (ageUser >= 66) {
    console.log('Over 65, hai Diritto allo sconto del 40%');
    priceFinal = ticketPrice - discountOver65;
    console.log(`Il prezzo del biglietto è: ${priceFinal.toFixed(2)} €`);
} else if (ageUser < 18) {
    console.log('Sei Minorenne e hai Diritto allo sconto del 20%');
    priceFinal = ticketPrice - discountMinors;
    console.log(`Il prezzo del biglietto è: ${priceFinal.toFixed(2)} €`);
} else {
    console.log('Sei Maggiorenne');
    priceFinal = ticketPrice;
    console.log(`Il prezzo del biglietto è: ${priceFinal.toFixed(2)} €`);
}
// Scrittura HTML 
document.getElementById('pricefinal').innerText = `Il prezzo del biglietto è di ${priceFinal.toFixed(2)} €`;




