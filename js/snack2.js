console.log('snack 2')

const array1 = ['pippo', 'PLUTO', 'Paperino'];

const array2 = array1.map((el) => {
  return el.toLowerCase(array1);
})

// console.log(array1, array2)


// ALTERNATIVA

// function capitalize(word) {

//   let capitalizedWord = word.toLowerCase();

//   let firstLetter = capitalizedWord.charAt(0).toUpperCase();
//   console.log(firstLetter);

//   capitalizedWord = firstLetter + capitalizedWord.slice(1);

//   return capitalizedWord;
// }

// const capitalizedArray = array1.map(nome => {

//   return capitalize(nome);
// })

// console.log(array1, capitalizedArray)