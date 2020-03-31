const express = require('express')
const router = express.Router()

const handlers = require('./student.handlers')
const note = require('./note/note')
const modules = require('./module/module')
const activity = require('./activity/activity')
const task = require('./task/task')
const week = require('./week/week')
const location = require('./location/location')

router.put('/edit', handlers.editStudent)
router.get('/', handlers.getStudent)

router.use('/note', note)
router.use('/module', modules)
router.use('/activity', activity)
router.use('/task', task)
router.use('/week', week)
router.use('/location', location)

module.exports = router