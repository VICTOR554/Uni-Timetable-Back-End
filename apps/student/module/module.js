const express = require('express')
const router = express.Router()

const handlers = require('./module.handlers')

router.get('/:code', handlers.getOneModule)
router.get('/', handlers.getAllModules)



module.exports = router