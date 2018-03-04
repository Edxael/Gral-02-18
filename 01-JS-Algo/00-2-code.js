console.log("\nHello from the CODE.JS File... \n\n");

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




































// arr1.map( (chiken, potatoe) => {
//
//     console.log("C value: ", chiken)
//     console.log("I value: ", potatoe)
//     // console.log("A value: ", lion)
//     console.log("------------------")
//
// } )




