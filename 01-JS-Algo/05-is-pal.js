// -----------------------------------------------------
// Return true if the word is palindrome.

const isPal = (str) => {
    return str === str.split('').reverse().join('')
}

console.log( isPal('ella') )


// -----------------------------------------------------
// Working with case sensitivity

const isPal = (str) => {
    return str.toLowerCase() === str.split('').reverse().join('').toLowerCase()
}

// -----------------------------------------------------
// Madam Im Adam

const isPal = (str) => {
    return str.toLowerCase().split(' ').join('') === str.split('').filter((x) => { return x !== ' ' }).reverse().join('').toLowerCase()
}

console.log( isPal('Madam Im Adam') )

// -----------------------------------------------------
