const express = require('express')
const app = express()



app.use('/test', (req, res) => {
    res.send('Hello Edmundo')
})


app.listen(5000, (err) => {
    if(err){ throw err }
    console.log(" ")
    console.log("API Up-&-Running.....")
})