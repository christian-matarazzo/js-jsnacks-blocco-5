const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'




//for method

/* let findUserClass = []
for (let i = 0; i < students.length; i++) {
  const student = students[i];

  if(student.name === "Marco Lanci") 
  {
    findUserClass.push(student.class)
  }
  
}
console.log(findUserClass); */



//find method
const findUserClass = students.find(function(user){
if(user.name === 'Marco Lanci') {
  return user
}
})

console.log(findUserClass.class);
