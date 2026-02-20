const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]





/* let sumNumbers = []

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    sum = number + 1


    sumNumbers.push(sum)
    
}

console.log(sumNumbers); */








 const sumNumber= numbers.map (function(number) {
    number = number + 1 

    return number
    
})
console.log(sumNumber); 