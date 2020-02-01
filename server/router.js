const express = require('express')
const router = express.Router()
const eventController = require('./eventController')

router('/create-events', eventController.create)

module.exports = router
