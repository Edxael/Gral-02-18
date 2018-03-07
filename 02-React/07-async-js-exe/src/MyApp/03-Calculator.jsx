/**
 * Create a variadic function (function that accepts a variable amount of values) and uses
 * reduce function to sum the values and return the reduced value as a promise.
 *
 * Use only async/await
 *
 * @param {Array<string>} values
 * @returns {Promise<Number>}
 */
const add = async (...values) => {
    const calculation = values.reduce( (pv, cv) => { return pv + cv }, 0 )
    return Promise.resolve(calculation)
}

/**
 * Create a variadic function (function that accepts a variable amount of values) and uses
 * reduce function to subtract values and return the reduced value as a promise.
 *
 * Use only async/await
 *
 * @param {Array<string>} values
 * @returns {Promise<Number>}
 */
const subtract = async (...values) => {
    const mypv = values.shift()
    const calculation = values.reduce( (pv, cv) => { return pv - cv }, mypv )
    return Promise.resolve(calculation)
}

/**
 * Export out the add, and subtract
 */
export default {
    add, subtract
}



// Note:
// A variadic function is a function where the total number of parameters 
// are unknown but those parameters can be utilize as an array with the 
// spread operator. 
