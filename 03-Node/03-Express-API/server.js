const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(require('./middleware/headers'))
app.use(require('./middleware/validate-session'))





// ***** ROUTES *****
app.use('/test', (req, res) => {
    res.send('Hello Edmundo')
})
    // User creation route
app.use('/api/users', require('./routes/users'))

    // Validate User
app.use('/api/login', require('./routes/sessions'))


app.use('/api/definitions', require('./routes/definitions'))



// ********* SERVER LISTENER *********
app.listen(5000, (err) => {
    if(err){ throw err }
    console.log(" ")
    console.log("API Up-&-Running.....")
})













