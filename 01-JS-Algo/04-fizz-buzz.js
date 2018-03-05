// The Famous Fizz-Buzz

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
