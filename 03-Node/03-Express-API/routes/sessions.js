const router = require('express').Router
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const constants = require('../config/constants')
const User = require('../models/1-user')


router.post('/', (res, req) => {
    User.findOne({ username: req.body.user.username }).then(
        (user) => {
            if(user){
                bcrypt.compare( req.body.user.pwd, user.passhash, (err, matches) => {
                    if(matches){
                        let sessionToken = jwt.sign(user._id, constants.JWT_SECRET, { expiresIn: 60*60*24 })
                        res.json({
                            user: user,
                            message: 'succesfully authenticated',
                            sessionToken: sessionToken
                        })
                    } else {
                        res.json({
                            user: {},
                            message: 'Fail to Authentication',
                            sessionToken: ''
                        })
                    }
                } )
            } else {
                res.json({
                    user: {},
                    message: 'Fail to Authentication',
                    sessionToken: ''
                })
            }
        },
        (err) => {
            // User not found
        res.json(err)
        }
    )
})

module.exports = router