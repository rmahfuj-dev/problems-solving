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