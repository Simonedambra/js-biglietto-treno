'use strict'

const chilometri = Number(prompt('inserisci km'));

const eta = Number(prompt('inserisci l\'età'));

const prezzokm = Number(0.21)

const prezzo = Number(chilometri * prezzokm)

const percentuale20 = (prezzo / 100 * 80)
const percentuale40 = (prezzo / 100 * 60)

if (eta < 18) {
    const prezzo20 = (percentuale20)
    console.log(prezzo20);
}
else if (eta > 65) {
    const prezzo40 = (percentuale40)
    console.log(prezzo40);
}

