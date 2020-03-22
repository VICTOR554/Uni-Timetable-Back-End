const express = require('express')
const router = express.Router()

const handlers = require('./task.handlers')

router.post('/new', handlers.createTask)
router.get('/onschedule', handlers.getAllTasks_onSchedule)
router.get('/completed', handlers.getAllTasks_completed)
router.get('/flagged', handlers.getAllTasks_flagged)
router.get('/overdue', handlers.getAllTasks_overdue)
router.get('/one/:id', handlers.getOneTask)

router.put('/edit/:id', handlers.editTask)
router.delete('/delete/:id', handlers.deleteTask)




module.exports = router 