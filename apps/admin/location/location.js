const express = require('express')
const router = express.Router()

const handlers = require('./location.handlers')

router.get('/:key', handlers.getOneLocation)
router.get('/', handlers.getAllLocations)
router.post('/new', handlers.createLocation)
router.put('/:key', handlers.updateLocation)
router.delete('/:key', handlers.deleteOneLocation)



module.exports = router