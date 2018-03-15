const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())


app.use('/test', (req, res) => {
    res.send('Hello Edmundo')
})

app.use('/api/users', require('./routes/users'))

app.listen(5000, (err) => {
    if(err){ throw err }
    console.log(" ")
    console.log("API Up-&-Running.....")
})