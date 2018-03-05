console.log("\nHello from the CODE.JS File... \n\n");

const isPal = (str) => {
    return str.toLowerCase().split(' ').join('') === str.split('').filter((x) => { return x !== ' ' }).reverse().join('').toLowerCase()
}

console.log( isPal('Madam Im Adam') )

