const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Ethopia']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Explain the difference between forEach, map, filter, and reduce.
// forEach - forEach iterate an array element and apply a function/operator to each of the elements
// map - map iterate an array element, applying a function to each element, and return an array
// filter - returns an array after the filte condition
// reduce - Takes a callback function, which cincludes accumulator, current, and returns a single value

// Use forEach to console.log each country in the countries array.
countries.forEach((element) => console.log(element))

// Use forEach to console.log each name in the names array.
names.forEach((element) => console.log(element))

// Use forEach to console.log each number in the numbers array.
numbers.forEach((element) => console.log(element))

// Use map to create a new array by changing each country to uppercase in the countries array.
console.log(countries.map((ctry) => ctry.toUpperCase()))

// Use map to create an array of countries length from countries array.
console.log(countries.map((ctry) => ctry.length))

// Use map to create a new array by changing each number to square in the numbers array
console.log(numbers.map((num) => num ** 2))

// Use map to change to each name to uppercase in the names array
console.log(names.map((name) => name.toUpperCase()))

// Use filter to filter out countries containing land.
console.log(countries.filter((ctry) => ctry.includes("land")))

// Use filter to filter out countries having six character.
console.log(countries.filter((ctry) => ctry.length != 6))

// Use filter to filter out countries containing six letters and more in the country array.
console.log(countries.filter((ctry) => ctry.length < 6))

// Use filter to filter out country start with 'E';
console.log(countries.filter((ctry) => ctry.startsWith("E")))

// Use filter to filter out only prices with values.
console.log(products.filter((product) => typeof product.price == 'number'))


// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (arr) => { return arr.filter((item) => typeof item == "string") }
const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Ethopia', 1, 2, 3]
console.log(getStringLists(countries1))

// Use reduce to sum all the numbers in the numbers array.
console.log(numbers.reduce((acc, cur) => acc + cur, 0))

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
console.log(countries.reduce((acc, cur) => acc + cur + ", ", ""))

// Explain the difference between some and every
// some: check if some of the elements are similar in one aspect. Return true if any element in the array is True
// every: only return True if every element is true

// Use some to check if some names' length greater than seven in names array
// console.log(names.some((name) => name.length > 7))

// Use every to check if all the countries contain the word land
console.log(countries.every((ctry) => ctry.includes("land")))
