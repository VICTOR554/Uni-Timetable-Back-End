const express = require('express')
const router = express.Router()

const handlers = require('./module.handlers')

router.get('/:course_id', handlers.getAllModules)
router.get('/:course_id/:code', handlers.getOneModule)
router.post('/new', handlers.createModule)
router.put('/edit/:code', handlers.editModule)
router.delete('/:code', handlers.deleteModule)

module.exports = router