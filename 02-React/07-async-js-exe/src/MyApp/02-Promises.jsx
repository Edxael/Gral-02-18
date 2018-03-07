/**
 * Create a string with your name, wrap it with a promise, and return it.
 */
export const resolvingValues = (name) => {
    return Promise.resolve(name)
}

/**
 * Return a rejected promise that has 'Doh' as the message
 */
export const rejectedPromise = () => {
    return Promise.reject('Doh')
}

/**
 * For this function, we're going to some code that conditionally checks the number (parameter)
 *  - When the number is positive, resolve the promise with the number
 *  - When the number is negative, reject the promise, provide the number as the rejection message
 */
export const conditionallyReject = (number) => {
    return (number > 0) ? Promise.resolve(number * 2) : Promise.reject('Invalid Input')
}

// const REPLACE_WITH_CODE = false
  