const express = require('express')
const router = express.Router()

const handlers = require('./location.handlers')

router.get('/:name', handlers.getOneLocation)
router.get('/', handlers.getAllLocations)
router.post('/new', handlers.createLocation)
router.put('/:name', handlers.updateLocation)
router.delete('/:name', handlers.deleteOneLocation)



module.exports = router