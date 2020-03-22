const express = require('express')
const router = express.Router()

const handlers = require('./note.handlers')

router.post('/new', handlers.createNote)
router.get('/one/:id', handlers.getOneNote)
router.get('/', handlers.getAllNotes)
router.put('/edit/:id', handlers.editNote)
router.delete('/delete/:id', handlers.deleteNote)



module.exports = router