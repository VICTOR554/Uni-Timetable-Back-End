const express = require('express')
const router = express.Router()

const handlers = require('./location.handlers')

router.get('/:key', handlers.getOneLocation)
router.get('/', handlers.getAllLocations)




module.exports = router