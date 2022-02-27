// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Lee"
let lastName = "Mengyong"
let country = "Singapore"
let city = "Singapore"
let age = 34
let isMarried = true
let year = new Date().getFullYear()

console.log(firstName, typeof firstName)
console.log(lastName, typeof lastName)
console.log(country, typeof country)
console.log(age, typeof age)
console.log(isMarried, typeof isMarried)
console.log(year, typeof year)

// Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10)

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)

// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
console.log(Boolean("hello"))
console.log(Boolean(1))
console.log(Boolean(true))

// Write three JavaScript statement which provide falsy value.
console.log(Boolean(undefined))
console.log(Boolean(0))
console.log(Boolean(""))

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3 #true
// 4 >= 3 #true
// 4 < 3 #false
// 4 <= 3 #false
// 4 == 4 #true
// 4 === 4 #true
// 4 != 4 #false
// 4 !== 4 #false
// 4 != '4' #false
// 4 == '4' # true
// 4 === '4' # false

console.log("Comparison Operators")
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// Find the length of python and jargon and make a falsy comparison statement.
let pythonLen = "python".length
let jargonLen = "jargon".length
console.log(pythonLen === jargonLen)

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 #true
// 4 > 3 && 10 > 12 #false
// 4 > 3 || 10 < 12 #true
// 4 > 3 || 10 > 12 #true
// !(4 > 3) #false
// !(4 < 3) #true
// !(false) #true
// !(4 > 3 && 10 < 12) #false
// !(4 > 3 && 10 > 12) #true
// !(4 === '4') #true
// There is no 'on' in both dragon and python #false

console.log("Comparsion Operator 2")
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

// Use the Date object to do the following activities
const now = new Date()
// What is the year today?
console.log(now.getFullYear())
// What is the month today as a number?
console.log(now.getMonth())
// What is the date today?
console.log(now)
// What is the day today as a number?
console.log(now.getUTCDate())
// What is the hours now?
console.log(now.getUTCHours())
// What is the minutes now?
console.log(now.getUTCMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let oldData = new Date("01/01/1970")
let elapsedSeconds = parseInt((now - oldData) / 1000)
console.log(elapsedSeconds)
