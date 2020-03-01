const express = require('express')
const router = express.Router()

const handlers = require('./Term.handlers')

router.get('/', handlers.getAllTerms)
router.get('/:id', handlers.getOneTerm)
router.post('/new', handlers.createTerm)
router.put('/edit/:id', handlers.editTerm)
router.post('/', handlers.createTerm)
router.delete('/:id', handlers.deleteTerm)

module.exports = router