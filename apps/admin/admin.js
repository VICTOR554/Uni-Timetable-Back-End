const express = require('express')
const router = express.Router()

const activity = require('./activity/activity')
const course = require('./course/course')
const lecturer = require('./lecturer/lecturer')
const modules = require('./module/module')
const session = require('./session/session')
const student = require('./student/student')
const term = require('./term/term')
const week = require('./week/week')

router.use('/activity', activity)
router.use('/course', course)
router.use('/module', modules)
router.use('/lecturer', lecturer)
router.use('/session', session)
router.use('/student', student)
router.use('/term', term)
router.use('/week', week)

module.exports = router