const express = require('express')
const router = express.Router()

const handlers = require('./activity.handlers')

router.get('/', handlers.getAllActivities)
router.get('/:id', handlers.getOneActivity)
router.post('/new', handlers.createActivity)
router.put('/edit/:id', handlers.editActivity)
router.delete('/:id', handlers.deleteActivity)

module.exports = router