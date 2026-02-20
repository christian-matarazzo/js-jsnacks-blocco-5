const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]








// for method
/* const even = []
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num % 2 === 0)
    {even.push(num)}
    
}
console.log(even); */












//filter method
const even = nums.filter(function(num){
    if (num % 2 === 0)
    {return true}
})

console.log(even);
