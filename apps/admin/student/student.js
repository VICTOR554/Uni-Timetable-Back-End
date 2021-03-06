const express = require('express')
const router = express.Router()

const handlers = require('./student.handlers')

router.post('/new', handlers.createStudent)
router.get('/:number', handlers.getOneStudent)
router.get('/', handlers.getAllStudents)
router.put('/edit/:number', handlers.editStudent)



module.exports = router