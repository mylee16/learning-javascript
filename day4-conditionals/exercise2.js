// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let studentScore = parseInt(prompt("Enter your score: "))

// if (80 <= studentScore && studentScore <= 100) {
//     alert(`You got A grade`) 
// }
// else if (70 <= studentScore && studentScore < 80) {
//     alert(`You got B grade`)
// }
// else if (60 <= studentScore && studentScore < 70) {
//     alert(`You got C grade`)
// }
// else if (50 <= studentScore && studentScore < 60) {
//     alert(`You got D grade`)
// }
// else if (0 <= studentScore && studentScore < 50) {
//     alert(`You got F grade`)
// }
// else {
//     alert(`You entered an invalid number`)
// }

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let currentMonth = prompt("Enter the month: ").toLowerCase()

// if (['september', 'october', 'november'].includes(currentMonth)) {
//     alert(`Autumn is here`)
// }
// else if (['december', 'january', 'february'].includes(currentMonth)) {
//     alert(`Winter is here`)
// }
// else if (['march', 'april', 'may'].includes(currentMonth)) {
//     alert(`Spring is here`)
// }
// else if (['june', 'july', 'august'].includes(currentMonth)) {
//     alert(`Summer is here`)
// }
// else {alert(`Wrong Input`)}

// Check if a day is weekend day or a working day. Your script will take day as an input.
// function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     return str.join(' ');
//   }

// let inputDay = titleCase(prompt("What is the day today?"))

// if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(inputDay)) {
//     alert(`${inputDay} is a working day.`)
// }
// else if (['Saturday', 'Sunday'].includes(inputDay)){
//     alert(`${inputDay} is a weekend.`)
// }
// else {alert(`Wrong Input`)}

// Write a program which tells the number of days in a month, now consider leap year.

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

let inputYear = parseInt(prompt("What is the year?"))
let inputMonth = titleCase(prompt("What is the month?"))

const numDaysOfMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
};

if (inputYear % 4 == 0 && inputMonth == "February") {
    alert(`${inputMonth} of ${inputYear} have ${numDaysOfMonth[inputMonth] + 1} days`)
}
else {
    alert(`${inputMonth} of ${inputYear} have ${numDaysOfMonth[inputMonth]} days`)
}