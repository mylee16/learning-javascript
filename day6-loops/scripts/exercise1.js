// Iterate 0 to 10 using for loop, do the same using while and do while loop
// let i = 10
// while (i >= 0) {
//     console.log(i)
//     i--
// }

// let j = 10
// do {
//     console.log(j)
//     j--
// } while (j >= 0)


// Iterate 0 to n using for loop
// let k = 0
// let n = 5
// for (let k = 0; k <= n; k++){
//     console.log(k)
// }

// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
// for (let i = 1; i <= 7 ; i++) {
//     console.log("#".repeat(i))
// }

// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for (i = 0; i<=10; i++) {
//     console.log(`${i} x ${i} = ${i*i}`)
// }


// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// console.log(`i\t\ti^2\t\ti^3`)
// for (i=0; i<=10; i++) {
//     console.log(`${i}\t\t${i*i}\t\t${i*i*i}`)
// }

// Use for loop to iterate from 0 to 100 and print only even numbers

// for (i=0; i<=100; i++) {
//     if (i%2==0){
//         console.log(i)
//     }
// }

// Use for loop to iterate from 0 to 100 and print only odd numbers
// for (i=0; i<=100; i++) {
//     if (i%2==1){
//         console.log(i)
//     }
// }

// Use for loop to iterate from 0 to 100 and print only prime numbers
// for (i=0; i<=100; i++) {
//     let flag = true
//     for (j=2; j<i & flag==true; j++) {
//         if (i%j==0){
//             flag = false
//         }
//     }
//     if (flag == true){
//         console.log(i)
//     }
// }

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
// let sum = 0
// for (i=0; i<=100; i++){
//     sum += i
// }
// console.log(sum)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// let sum_even = 0
// let sum_odd = 0

// for (i=0; i<=100; i++){
//     if (i % 2 == 0) {
//         sum_even += i
//     }
//     else {    
//         sum_odd += i
//     }
// }
// console.log(sum_even, sum_odd)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//   [2550, 2500]
// console.log([sum_even, sum_odd])


// Develop a small script which generate array of 5 random numbers
// let arr = []
// for (i=0; i<5; i++){
//     arr.push(Math.floor(Math.random()*11))
// }
// console.log(arr)


// Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let arr = []
// let i = 0
// while (i<5){
//     let generated_num = Math.floor(Math.random()*6)
//     console.log(arr)
//     console.log(generated_num)

//     if (arr.indexOf(generated_num)!=-1){
//         console.log("repeated")
//     }
//     else {
//         arr.push(generated_num)
//         i++
//     }
    
// }
// console.log(arr)

// Develop a small script which generate a six characters random id:
// 5j2khz

console.log(Math.random().toString(36).substring(2,5))
console.log(btoa(Math.random().toString().substring(10, 5)))