const express = require('express')
const router = express.Router()

const handlers = require('./activity.handlers')

router.get('/:id', handlers.getOneActivity)
//router.get('/day/:start_date_time', handlers.getOneDayActivities)

router.get('/day/:start_date_time', handlers.getModules, handlers.getActivities, handlers.getOneDayActivities)



module.exports = router