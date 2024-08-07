// Dichiarazione variabili
let counter = Number(prompt("Inserisci quante volte vuoi tirare il dado:"));

// Function lancio dadi di entrambi i giocatori
function lancio(numero){

    let punteggio1 = 0;
    let punteggio2 = 0;

    for(i = 1; i <= numero; i++){

        punteggio1 = punteggio1 + Math.floor(Math.random() * (6 - 1) + 1);
        console.log(`Al tiro del dado numero ${i}, il giocatore 1 ha compiuto ${punteggio1} punti`);

        punteggio2 = punteggio2 + Math.floor(Math.random() * (6 - 1) + 1);
        console.log(`Al tiro del dado numero ${i}, il giocatore 2 ha compiuto ${punteggio2} punti`);

    }
    // Settaggio della if per stabilirne il vincitore
    if(punteggio1 < punteggio2){
        console.log(`Congratulazioni, il vincitore è Giocatore 2 con il punteggio di ${punteggio2}`);

    }else if(punteggio1 == punteggio2){
        console.log(`La partita è finita in parità`);

    }else{
        console.log(`Congratulazioni, il vincitore è Giocatore 1 con il punteggio di ${punteggio1}`);

    }
}

// Invocazione della function
lancio(counter)


// Fine Esercizio