// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

const word = prompt("Enter your word"
)
const reversed = word.split("").reverse().join("")
console.log(reversed)