const express = require('express')
const router = express.Router()

const activity = require('./activity/activity')
const course = require('./course/course')
const modules = require('./module/module')
const session = require('./session/session')
const term = require('./term/term')
const week = require('./week/week')

router.use('/activity', activity)
router.use('/course', course)
router.use('/module', modules)
router.use('/session', session)
router.use('/term', term)
router.use('/week', week)

module.exports = router