
const isPal = (str) => {
    return str === str.split('').reverse().join('')
}

console.log( isPal('ella') )


// -----------------------------------------------------

const isPal = (str) => {
    return str.toLowerCase() === str.split('').reverse().join('').toLowerCase()
}

// -----------------------------------------------------

