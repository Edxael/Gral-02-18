const jwt = require('jsonwebtoken')
const User = require('../models/1-user')
const constants = require('../config/constants')

module.exports = (req, res, next) => {
    let sessinToken = req.header.authorization

    if(!req.body.user && sessinToken){
        jwt.verify(sessinToken, constants.JWT_SECRET, (err, decodedId) => {
            if(decodedId) {
                User.findOne({ _id: decodedId }).then((user) => {
                    req['user'] = user
                    next()
                }, (err) => {
                    res.send(401, 'Not Authorized')
                })
            } else{
                res.send(401, 'Not Authorized')
            }
        })
    } else {
        next()
    }
}