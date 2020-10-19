const express = require('express')
const { Appointment } = require('../models/appointment')
const verifyJWT = require("../verifyToken")
const router = express.Router()

router.get('/list/:id', verifyJWT, (req, res) => {
    console.log('/list/:id appointments');
    Appointment.find((err, docs) => {
        if (!err) res.send(docs.filter(appointment => appointment.userId === req.params.id))
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})

router.post('/', verifyJWT, (req, res) => {
    console.log('post /appointment');
    var newRecord = new Appointment({
        name: req.body.name,
        description: req.body.description,
        doctorName: req.body.doctorName,
        userId: req.body.userId,
        date: req.body.date
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
})

module.exports = router