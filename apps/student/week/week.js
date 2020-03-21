const express = require('express')
const router = express.Router()

const handlers = require('./week.handlers')

router.get('/', handlers.getAllWeeks)
router.get('/date/:date', handlers.getOneWeekByDate)
router.get('/number/:number', handlers.getOneWeekByNumber)




module.exports = router 