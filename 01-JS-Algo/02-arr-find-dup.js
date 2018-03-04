// Find the duplicated number in the given array

const myArr = [1, 2, 3, 4, 7, 5, 6, 8, 2, 9, 10, 11, ]
console.log(myArr)



const dup = (arr) => {
    let dupNum = 0

    arr.forEach( (c, i, a) => { 
        if(i !== a.indexOf(c)) { dupNum = c }
     } )
    
    return `The duplicate number is: ${dupNum}`
}



console.log(dup(myArr))



// ------------------------------------------------------------------------------
// Find the duplicated number in the given array

const myArr = [1, 2, 3, 4, 7, 5, 6, 8, 2, 9, 10, 11, ]
console.log(myArr)



const dup = (arr) => {
    return arr
            .map( (c, i, a) => { if(i !== a.indexOf(c)) { return `The duplicated is: ${c}` } } )
            .filter((f) => { return f !== undefined })
            .reduce( (r) => { return r } )
}



console.log(dup(myArr))