const express = require('express')
const router = express.Router()

const handlers = require('./location.handlers')

router.get('/:name', handlers.getOneLocation)
router.get('/', handlers.getAllLocations)




module.exports = router