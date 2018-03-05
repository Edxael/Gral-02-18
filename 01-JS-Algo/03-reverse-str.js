

// Create a function that receives a string and returns the string reversed. 

const word = 'Helio Training'

const myReverse = (str) => { 
    return str.split('').reverse().join('')
 }

 console.log( "The function returns: ", myReverse(word) )

//  --------------------------------------------------------------
// Same without using .reverse()

const myReverse = (str) => { 
    return str.split('').reduce( (pv, cv) => { return cv + pv }, '' )
 }
