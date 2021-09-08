const express = require('express')
const things = express.Router()

things.get('/', function (req, res) {
    res.send('GET route on things.js')
})
things.post('/', function (req, res) {
    res.send('POST route on things.js')
})

//export this router to use in our index.js
module.exports = things