const router = require('express').Router
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const constants = require('../config/constants')
const User = require('../models/1-user')


router.post('/', (res, req) => {
    User.findOne({ username: req.body.user.username }).then(
        (user) => {

        },
        (err) => {
            res.json(err)
        }
    )
})