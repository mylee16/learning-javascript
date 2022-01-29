// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
ages.sort()
let min = ages[0]
let max = ages[ages.length - 1]
console.log(min)
console.log(max)

// Find the median age(one middle item or two middle items divided by two)
console.log(ages[Math.floor(ages.length / 2)])

// Find the average age(all items divided by number of items)
const reducer = (accumulator, curr) => accumulator + curr;
let average = ages.reduce(reducer)/ages.length
console.log(average)

// Find the range of the ages(max minus min)
console.log(ages[ages.length - 1] - ages[0])

// Compare the value of (min - average) and (max - average), use abs() method 
console.log(Math.abs(min-average))
console.log(Math.abs(max-average))

// Slice the first ten countries from the countries array
console.log(countries.slice(0, 10))

// Find the middle country(ies) in the countries array
console.log(countries[Math.floor(countries.length / 2)])

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
console.log(countries.slice(0, Math.floor((countries.length + 1) / 2)))
console.log(countries.slice(Math.floor((countries.length + 1) / 2)))
