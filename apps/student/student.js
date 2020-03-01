const express = require('express')
const router = express.Router()

const handlers = require('./student.handlers')
const note = require('./note/note')

router.put('/edit/:number', handlers.editStudent)
router.post('/', handlers.createStudent)
//router.delete('/:number', handlers.deleteStudent)

//router.use('/note', note)

module.exports = router