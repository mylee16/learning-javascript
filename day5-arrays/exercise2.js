console.log(countries)
console.log(webTechs)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

// First remove all the punctuations and change the string to array and count the number of words in the array
// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(" ")
console.log(words)
console.log(words.length)

// In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart)
// remove 'Honey' if you are allergic to honey
shoppingCart.splice(shoppingCart.indexOf('Honey'))
console.log(shoppingCart)
// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)


// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let countryName = "Singapore"
let index = countries.indexOf(countryName)

if (index != -1) {
    console.log(countryName.toUpperCase())
}
else {
    countries.push(countryName)
    console.log(countries)
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let techName = "Sass"
let indexTech = webTechs.indexOf(techName)

if (indexTech != -1) {
    console.log(`${techName} is a CSS preprocess`)
}
else {
    webTechs.push(techName)
    console.log(webTechs)
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

