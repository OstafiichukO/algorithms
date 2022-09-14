// console.log(isNaN("Hello"))
// console.log(isNaN(345))
// console.log(isNaN('1'))
// console.log(isNaN(true))
// console.log(isNaN(false))
// console.log(isNaN(undefined))

const arrayData = [7, "correct", 0, false, 9, NaN, ""]

const notFalsy = []

for (let i = 0; i < arrayData.length; i++) {
  if (!!arrayData[i]) {
    notFalsy.push(arrayData[i])
  }
}

console.log(notFalsy)