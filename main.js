// array of possible hex character options
const options = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function to establish a number between 1-16 (possible characters from options array)
const getRandomChar = arr => {
    return Math.floor(Math.random() * arr.length);
}
// variable to determine char from options array that corresponds with number from getRandomChar function
const individualChar = options[getRandomChar(options)];

const hexGenAttempt = () => {
    if (individualChar[0]) {
        return individualChar
    }
}

console.log(firstHexGenerator() + secondHexGenerator());