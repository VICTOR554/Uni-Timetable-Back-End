const express = require('express')
const router = express.Router()

const handlers = require('./session.handlers')

router.get('/', handlers.getAllSessions)
router.get('/:id', handlers.getOneSession)
router.post('/new', handlers.createSession)
router.put('/edit/:id', handlers.editSession)
router.delete('/', handlers.deleteSession)

module.exports = router