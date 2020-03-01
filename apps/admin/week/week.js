const express = require('express')
const router = express.Router()

const handlers = require('./Week.handlers')

router.get('/', handlers.getAllWeeks)
router.get('/:id', handlers.getOneWeek)

module.exports = router