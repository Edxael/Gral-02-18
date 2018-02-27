console.log("\nHello from the CODE.JS File... \n\n");


let arr1 = ['apple', 'orange', 'apple', 'orange', 'pear', 'orange'];
console.log(arr1)
console.log(" ")


let temp1 = arr1.reduce( (pv, cv) => {
    pv[cv] = (pv[cv] + 1) || 1
    return pv
}, {})


console.log(temp1)





































// arr1.map( (chiken, potatoe) => {
//
//     console.log("C value: ", chiken)
//     console.log("I value: ", potatoe)
//     // console.log("A value: ", lion)
//     console.log("------------------")
//
// } )




