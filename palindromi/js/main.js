// creo una variabile contente la parola sulla quale effettuare la verifica
const word = prompt('Inserisci una parola')

// creo una funzione checkPalindromo
function checkPalindromo(word){

    let result;
    
    // creo una lista vuota
    let opposite = []

    // creo una lista e converto la parola in un array
    const wordList = word.split('')

    // creo un ciclo per pushare le lettere della parola dall'ultima alla prima
    for (i = wordList.length; i >= 0 ; i--){
        opposite.push(wordList[i])
    }

    // converto la lista opposite in stringa
    const oppositeStr = opposite.join('')

    // verfico che le stringhe siano uguali o meno
    if (word === oppositeStr){
        result = 'È un palindromo'
    }else{
        result = 'Non è un palindromo'
    }

    // ritorno il risultato
    return result
}

// richiamo la funzione
window.alert(checkPalindromo(word))
