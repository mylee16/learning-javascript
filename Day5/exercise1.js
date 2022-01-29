// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]

// // Declare an empty array;
// let emptyArray = []

// // Declare an array with more than 5 number of elements
// let arrayWithFiveElements = Array(5)

// // Find the length of your array
// console.log(arrayWithFiveElements.length)

// // Get the first item, the middle item and the last item of the array
// console.log(countries[0])
// console.log(countries[Math.floor(countries.length / 2)])
// console.log(countries[countries.length - 1])

// // Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// let mixedDataTypes = ["string", 123, true, { country: 'Singapore' }, ["element1", "element2"], 123.321, null, undefined]
// console.log(mixedDataTypes.length)

// // Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// // Print the array using console.log()
// console.log(itCompanies)

// // Print the number of companies in the array
// console.log(itCompanies.length)

// // Print the first company, middle and last company
// console.log(itCompanies[0])
// console.log(itCompanies[itCompanies.length - 1])
// console.log(itCompanies[Math.floor(itCompanies.length / 2)])

// // Print out each company
// for (var i = 0, len = itCompanies.length; i < len; i++) {
//     console.log(`index ${i}: ${itCompanies[i]}`)
// }

// // Change each company name to uppercase one by one and print them out
// for (var i = 0, len = itCompanies.length; i < len; i++) {
//     console.log(`index ${i}: ${itCompanies[i].toUpperCase()}`)
// }

// // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(`${itCompanies.join(", ")} are big IT companies.`)

// // Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// let certainCompany = "Chicken"
// let index = itCompanies.indexOf(certainCompany)

// index != -1 ? console.log(`${certainCompany} is found`) : console.log(`${certainCompany} does not exist`)


// // Filter out companies which have more than one 'o' without the filter method
// for (var i = 0, len = itCompanies.length; i < len; i++) {
//     company = itCompanies[i].toLowerCase()
//     count = 0
//     for (var j = 0, len2 = company.length; j < len2; j++) {
//         if (company[j] == "o") {
//             count++
//         }
//     }
//     if (count > 1) {
//         console.log(`${company} have more than 1 "o"`)
//     }
// }

// // Sort the array using sort() method
// console.log(itCompanies.sort())

// // Reverse the array using reverse() method
// console.log(itCompanies.reverse())

// // Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0, 3))

// // Slice out the last 3 companies from the array
// console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

// // Slice out the middle IT company or companies from the array
// console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

// // Remove the first IT company from the array
// console.log(itCompanies.shift())
// console.log(itCompanies)

// // Remove the middle IT company or companies from the array
// console.log(itCompanies.shift())

// // Remove the last IT company from the array
// console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1))

// // Remove all IT companies
// console.log(itCompanies.splice(0, itCompanies.length))
// console.log(itCompanies)