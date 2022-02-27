// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// function reverseArray(arr) {
//     newArr = []
//     for (i = 0; i <= arr.length - 1; i++) {
//         newArr.push(arr[arr.length - 1 - i])
//     }
//     return newArr
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

// Write a function which takes any number of arguments and return the sum of the arguments
const sum = (...args) => {
    let total = 0
    for (const element of args) {
        total += element
    }
    return total

}

console.log(sum(1, 6, 45, 123, 0, -100))