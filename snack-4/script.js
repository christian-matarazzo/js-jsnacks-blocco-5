const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

//for method
/* const authorNames = []
for (let i = 0; i < posts.length; i++) {
  const post = posts[i];

  authorNames.push(post.author)
  
}

console.log(authorNames); */


//map method

const authorNames = posts.map(function(authorName) {
  return authorName.author
})

console.log(authorNames);
