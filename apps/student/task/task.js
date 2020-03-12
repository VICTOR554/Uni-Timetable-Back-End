const express = require('express')
const router = express.Router()

const handlers = require('./task.handlers')

router.post('/new', handlers.createTask)
router.get('/:id', handlers.getOneTask)
router.get('/', handlers.getAllTasks)
router.put('/edit/:id', handlers.editTask)
router.delete('/delete/:id', handlers.deleteTask)




module.exports = router