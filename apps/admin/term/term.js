const express = require('express')
const router = express.Router()

const handlers = require('./term.handlers')

router.get('/', handlers.getAllTerms)
router.get('/:number', handlers.getOneTerm)
router.post('/new', handlers.createTerm)
router.put('/edit/:number', handlers.editTerm)
router.post('/', handlers.createTerm)
router.delete('/:number', handlers.deleteTerm)

module.exports = router