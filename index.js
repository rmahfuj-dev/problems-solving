// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.
const word = prompt("Enter your word"
)
const reversed = word.split("").reverse().join("")
console.log(reversed)


// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
const checkVowel = (x) => {
    const vowels = ["a", "e", "i", "o", "u"];

    let count = 0;

    for (let char of x.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    if (count > 0) {
        console.log(`There are total ${count} vowels`);
    } else {
        console.log("The string doesn't have any vowel");
    }
};



// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).
const check = (x) => {
    const cheking = x.split("").reverse().join("")
    if (x == cheking) {
        console.log("The string is palindrome ")
    } else {
        console.log("String is not palindrome")
    }
}



// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.
const findMax = arr =>
    arr.reduce((max, num) => Math.max(max, num), -Infinity);

console.log(findMax([5, 1, 9, 3]));





// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

const removeDuplicate = (x) => {
    return [...new Set(x)];
};


// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array

const arraySum = (x) => {
    let sum = 0;

    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }

    return sum;
};



// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

const findEven = (x) => {
    return x.filter(num => num % 2 === 0);
};



// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

const capitalize = (x) => {
    return x
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};



// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

const factorial = (x) => {
    if (x < 0) return "Invalid input";
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }
    return result;
};



// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.
const pingPong = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else if (i % 5 === 0) {
            console.log("Pong");
        } else {
            console.log(i);
        }
    }
};