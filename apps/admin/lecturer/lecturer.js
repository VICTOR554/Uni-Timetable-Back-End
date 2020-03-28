const express = require('express')
const router = express.Router()

const handlers = require('./lecturer.handlers')

router.get('/', handlers.getAllLecturers)
router.get('/:number', handlers.getOneLecturer)
router.post('/new', handlers.createLecturer)
router.put('/edit/:number', handlers.editLecturer)
router.delete('/:number', handlers.deleteLecturer)

module.exports = router