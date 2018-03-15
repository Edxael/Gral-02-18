const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/1-user') 

router.post('/', (req, res) => {
    let user = new User({
        username: req.body.user.username,
        email: req.body.user.email,
        passhash: bcrypt.hashSync(req.body.user.pwd, 10)
    })

    user.save().then(
        (newuser)  => { 
            res.json({
                user: newuser,
                message: 'Success in creating user..'
            })
        },
        (err) => { res.send(500, err.message) }
    )
})

module.exports = router



// -----------------------------------------------
// Example of JSON object to create new user: (POSTMAN)
//
// {
//     "user": {
//         "username": "Ayumi Hamasaki",
//         "email": "ayu@avex.jp",
//         "pwd": "ayuForever"
//     }
// }
