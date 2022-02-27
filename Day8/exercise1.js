// Create an empty object called dog
const dog = {}

// Print the the dog object on the console
console.log(dog)

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "happy"
dog.legs = 4
dog.color = "black"
dog.sound = "woof"
dog.bark = function () {
    return `${this.sound} ${this.sound} ${this.sound}`
}
dog.getDogInfo = function () {
    return `${this.breed}, ${this.name}`
}

console.log(dog.bark())

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.bark)


// Set new properties the dog object: breed, getDogInfo
dog.breed = "stray dog"
console.log(dog.getDogInfo())