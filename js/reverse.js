const forReverse = [1, 3, 4, 6, 6, 7, 9];

const reversed = []
for (let i = forReverse.length - 1; i >= 0; i--) {
  reversed.push(forReverse[i])
}

// console.log(reversed)

const reversedSecond = forReverse.map((e, index, array) => array[array.length - index - 1]) 
// console.log(reversedSecond)

// console.log([...forReverse].map(forReverse.pop, forReverse))

// let sum = 0
// for (let i = 0; i <= forReverse.length - 1; i++) {
//   sum += forReverse[i]
// }

// console.log(sum) 