console.log("\nHello from the CODE.JS File... \n\n");

const myFizz = (num) => {
    const fi = ' Fizz'
    const bu = ' Buzz'
    const fb = ' Fizz-Buzz'
    const az = 'Not Aplicable'

    return Array(num).fill('a')
                     .map((c, i) => { return (i % 3 === 0 && i % 5 === 0) ? i + fb :
                                             (i % 3 === 0) ? i + fi :
                                             (i % 5 === 0) ? i + bu : az
                    })
}

console.log( myFizz(25) )




































// arr1.map( (chiken, potatoe) => {
//
//     console.log("C value: ", chiken)
//     console.log("I value: ", potatoe)
//     // console.log("A value: ", lion)
//     console.log("------------------")
//
// } )




