// Declare a function fullName and it print out your full name.
// function fullName() {
//     console.log("Mengyong Lee")
// }
// fullName()

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// function fullName(firstName, lastName) {
//     console.log(`${firstName} ${lastName}`)
// }
// fullName("Mengyong", "Lee")

// Declare a function addNumbers and it takes two two parameters and it returns sum.
// function addNumber(num1, num2) {
//     return num1 + num2
// }
// console.log(addNumber(4, 6))

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// function areaOfRectangle(length, width) {
//     return length * width
// }

// console.log(areaOfRectangle(20, 5))


// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// function perimeterOfRectangle(length, width) {
//     return 2 * (length + width)
// }

// console.log(perimeterOfRectangle(4, 16))

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// function volumeOfRectPrism(length, width, height) {
//     return length * width * height
// }

// console.log(volumeOfRectPrism(10, 4, 2))

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. 
// BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function checkBmi(weight, height) {
    return weight / (height * height)
}

function checkPersonStatus(weight, height) {
    const bmi = checkBmi(weight, height)
    console.log(`BMI is ${bmi}`)

    if (bmi < 18.5) {
        return "Underweight"
    }
    else if (bmi < 25) {
        return "Normal Weight"
    }
    else if (bmi < 30) {
        return "Overweight"
    }
    else {
        return "Obese"
    }
}

console.log(checkPersonStatus(60, 1.65))


// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {

    if ((a >= b) && (a >= c)) {
        return a
    }
    else if ((b >= a) && (b >= c)) {
        return b
    }
    else { return c }
}

console.log(findMax(1000, 100, 10))

console.log(findMax(0, 10, 5))

console.log(findMax(0, -10, -2))
