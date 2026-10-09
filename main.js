let voto = 7;

if (voto >= 9) {
    console.log("ottimo");

}

else if (voto >= 7) {
    console.log("Buono");

}

else if (voto >= 6) {
    console.log("Sufficiente");
}
else {
    console.log("insufficiente")
}



let ora = 13;

if (ora < 12) {
    console.log("Buongiorno");

}

else if (ora < 18) {
    console.log("Buonpomeriggio");

}


else {
    console.log("Buonasera")
}


// let nome = prompt("come ti chiami?", "Antonella");

// if (nome) {
//     console.log("Ciao " + nome + ", benvenuto!");
// } else {
//     console.log("Nessun nome inserito.");
// }

// // 
// let citta = prompt("dove vivi?", "Matera");

// if (citta) {
//     console.log("Vivi a " + citta + ", ottima scelta!");
// } else {
//     console.log("Città non inserita.");
// }
// // 

let haAccount = false;
let passwordCorretta = false;

if (haAccount) {
    if (passwordCorretta) {
        console.log("Accesso effettuato");
    } else {
        console.log("Password errata");
    }
} else {
    console.log("Account non trovato");
}

let biglietto = false;
let eta = 15
    ;

if (biglietto) {
    if (eta >= 18) {
        console.log("Benvenuto");
    } else {
        console.log("Sei minorenne");
    }
} else {
    console.log("Biglietto mancante");
}


let punteggio = 80;
let nome = "Anna";
let testoNumero = "80";

if (punteggio > 60) {
    console.log("Punteggio sufficiente");
}

if (punteggio >= 75) {
    console.log("Soglia esatta o superata");
}

if (nome === "Anna") {
    console.log("Nome corretto");
}

if (punteggio == testoNumero) {
    console.log("Confronto debole: vero");
}

if (punteggio !== Number(testoNumero)) {
    console.log("Questo non viene stampato");
} else {
    console.log("Confronto stretto tra numero e numero: vero");
}


let codice = "1234";

if (codice == 1234) {
    console.log("Confronto debole: i valori sono considerati uguali");
}

if (codice === 1234) {
    console.log("Questo non viene stampato");
} else {
    console.log("Confronto stretto: tipo diverso, non sono uguali");
}