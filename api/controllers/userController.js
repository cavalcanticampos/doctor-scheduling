const express = require('express')
const { User } = require('../models/user')
const verifyJWT = require("../verifyToken")
const router = express.Router()

router.get('/', verifyJWT,  (req, res) => {
    console.log('/');
    User.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving records : ' + JSON.stringify(err, undefined, 2))
    })
})

router.get('/list/doctors', verifyJWT, (req, res) => {
    console.log('/list/doctors');
    User.find((err, docs) => {
        if (!err) res.send(docs.filter(user => user.role === "doctor"))
        else console.log('Error while retrieving all doctors : ' + JSON.stringify(err, undefined, 2))
    })
})

router.post('/', (req, res) => {
    console.log('post /user');
    var newRecord = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
})

module.exports = router