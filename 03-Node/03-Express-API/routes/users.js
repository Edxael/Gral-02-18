const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/1-user') 
const jwt = require('jsonwebtoken')
const constants = require('../config/constants')


router.post('/', (req, res) => {
    let user = new User({
        username: req.body.user.username,
        email: req.body.user.email,
        passhash: bcrypt.hashSync(req.body.user.pwd, 10)
    })

    user.save().then(
        (newuser)  => { 
            let sessionToken = jwt.sign(newuser._id, constants.JWT_SECRET, { expiresIn: 60*60*24 })
            res.json({
                user: newuser,
                message: 'Success in creating user..',
                sessionToken: sessionToken
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
