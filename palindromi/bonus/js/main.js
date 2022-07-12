// creo una variabile contente una frase sulla quale effettuare la verifica
const sentence = prompt('Inserici una frase da verificare:').toLowerCase()

// creo una funzione checkPalindromo
function checkPalindromo(word){

    let result;
    
    // creo due liste vuote
    const opposite = []
    const noSpace = []

    // creo una lista e converto la parola in un array
    const wordList = sentence.split('')

    // creo un ciclo per pushare le lettere della parola in noSpace[], per ottenere una lista senza spazi
    for (i = 0; i <= wordList.length; i++){
        if(wordList[i] !== ' '){
            noSpace.push(wordList[i])
        }
    }

    // creo un ciclo per pushare le lettere della parola dall'ultima alla prima in opposite[]
    for (i = wordList.length; i >= 0 ; i--){
        // salto gli spazi presenti nella lista
        if(wordList[i] !== ' '){
            opposite.push(wordList[i])
        }
    }

    // converto la lista noSpace[] in stringa
    noSpace.pop()
    const noSpaceStr = noSpace.join('')

    // converto la lista opposite[] in stringa
    opposite.shift()
    const oppositeStr = opposite.join('')

    // verfico che le stringhe siano uguali o meno
    if (noSpaceStr === oppositeStr){
        result = 'È un palindromo'
    }else{
        result = 'Non è un palindromo'
    }

    // ritorno il risultato
    return result
}

// richiamo la funzione
window.alert(checkPalindromo(sentence))
