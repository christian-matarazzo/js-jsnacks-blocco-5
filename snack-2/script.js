const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'





//for method
/* for (let i = 0; i < people.length; i++) {
  const person = people[i];

  
  
  console.log(person.name);
} */





//forEach method
people.forEach(function(person) {
  console.log(person.name);
  
});
