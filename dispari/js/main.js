// creo un input per la puntata
const bet = prompt('Punta o pari o dispari').toLowerCase()

// creo input per il numero
const num = parseInt(prompt('Inserisci un numero da 1 a 5'))

// creo una funzion getRandom
function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// creo una funzione getSum
function getSum(a, b){
    return a + b
}

// creo una funzione getEvenOdd
function getEvenOdd(a){
    let result;

    if (a % 2 == 0){
        result = 'pari'
    }else{
        result = 'dispari'
    }

    return result
}

// creo una funzione getWinner
function getWinner(bet, res){
    let result;
    if(bet == res){
        result = `Congratulazioni, hai vinsto. Il numero della fortuna è ${res}`
    }else{
        result = `Mi dispiace, hai perso. Il numero della fortuna è ${res}`
    }
    return result
}

window.alert(getWinner(bet, getEvenOdd(getSum(num, getRandom(1, 5)))))
