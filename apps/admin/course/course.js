const express = require('express')
const router = express.Router()

const handlers = require('./Course.handlers')

router.get('/', handlers.getAllCourses)
router.get('/:id', handlers.getOneCourse)
router.post('/new', handlers.createCourse)
router.put('/edit/:id', handlers.editCourse)
router.delete('/', handlers.deleteCourse)

module.exports = router