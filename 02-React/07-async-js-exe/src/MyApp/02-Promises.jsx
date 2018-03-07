/**
 * Create a     your name, wrap it with a promise, and return it.
 */
export const resolvingValues = (myName) => {
  return Promise.resolve(myName)
}

/**
 * Return a rejected promise that has 'Doh' as the message
 */
export const rejectedPromise = () => {
   return Promise.reject('Doh')
}

/**
 * For this function, we're going write  some code that conditionally checks the number (parameter)
 *  - When the number is positive, resolve the promise with the number
 *  - When the number is negative, reject the promise, provide the number as the rejection message
 */
export const conditionallyReject = (number) => {
    if(number >= 0){
        return Promise.resolve(number)
    }else{
        return Promise.reject(number)
    }
}

// const REPLACE_WITH_CODE = false
  