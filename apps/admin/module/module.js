const express = require('express')
const router = express.Router()

const handlers = require('./module.handlers')

router.get('/:course_code', handlers.getAllModules)
router.get('/:course_code/:code', handlers.getOneModule)
router.post('/new', handlers.createModule)
router.put('/edit/:code', handlers.editModule)
router.post('/', handlers.createModule)
router.delete('/:code', handlers.deleteModule)

//router.use('/Module', Module)

module.exports = router