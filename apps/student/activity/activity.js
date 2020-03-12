const express = require('express')
const router = express.Router()

const handlers = require('./activity.handlers')

router.get('/week/:week_number', handlers.getOneActivity)
router.get('/day/:date', handlers.getOneDayActivities)



module.exports = router