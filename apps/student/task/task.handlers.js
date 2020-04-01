const models = require('../../../models/model')
const moment = require('moment')

const getAllTasks_onSchedule = function(req, res){
    console.log('oooo')
    date = +moment().format('X')
    console.log(date)
    models.Task.find({ student_number: req.student_number, is_completed: false})
    .sort( { create_date_time: -1 } )
    .then(d => {
      res.send(d);
      // console.log(d)
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
}

const getAllTasks_completed = function(req, res){
    models.Task.find({ student_number: req.student_number, is_completed: true }).sort( { created_date_time: -1 } )
    .then(d => {
      res.send(d);
      // console.log(d)
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
}

const getAllTasks_flagged = function(req, res){
    models.Task.find({ student_number: req.student_number, is_flagged: true} ).sort( { due_date_time: -1 } )
    .then(d => {
      res.send(d);
      // console.log(d)
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
}

const getAllTasks_overdue = function(req, res){
    date = moment(Date.now(), 'X')
    models.Task.find({ student_number: req.student_number, is_completed: false, due_date_time: {$lt: date} }).sort( { due_date_time: -1 } )
    .then(d => {
      res.send(d);
      // console.log(d)
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
}


const getOneTask = function(req, res){
    models.Task.findOne({
        student_number: req.student_number,
        _id: req.params.id
      })
      .then(d => {
        if (d){
          res.send(d);
          console.log(d);
        } else {
          res.json({text: 'nope'})
          console.log('nope')
        }
      }) 
      .catch(e => {
        console.log(e);
        res.send(e);
      });
}

const createTask = function(req, res){
    console.log('what it do')
    student = {student_number: req.student_number}

    models.Task.create({ ...req.body, ...student })
    .then(doc => {
      console.log("new note:", doc);
      res.status(200).send(doc);
    })
    .catch(e => {
      console.log(e);
      res.status(400).send(e);
    });
    
}

const editTask = function(req, res){
    console.log('nope', req.student_number)
    console.log(req.body)
    models.Task.updateOne({_id: req.params.id}, req.body)
    .then(doc => {
      console.log(doc);
      res.status(200).send(doc);
    })
    .catch(e => {
      res.status(400).send(e);
    });
}

const deleteTask = function(req, res){
    models.Task.deleteOne({_id: req.params.id, student_number: req.student_number})
    .then(doc => {
      console.log("delete task:", doc);
      res.send(doc);
    })
    .catch(e => {
      console.log(e);
    });

}


module.exports = {
    getAllTasks_onSchedule,
    getAllTasks_completed,
    getAllTasks_flagged,
    getAllTasks_overdue,
    getOneTask,
    createTask,
    editTask,
    deleteTask
}