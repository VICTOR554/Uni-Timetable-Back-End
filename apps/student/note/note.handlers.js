const models = require("../../../models/model");

const getAllNotes = function(req, res) {
  models.Note.find({ student_number: req.student_number }).sort( { date_time: -1 } )
    .then(d => {
      res.send(d);
      // console.log(d)
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
};

const getOneNote = function(req, res) {
  models.Note.findOne({
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
};

const createNote = function(req, res) {
  user = { student_number: req.student_number };

  models.Note.create({ ...req.body, ...user })
    .then(doc => {
      console.log("new note:", doc);
      res.status(200).send(doc);
    })
    .catch(e => {
      console.log(e);
      res.status(400).send(e);
    });
};

const editNote = function(req, res) {
  console.log(req.body)
  models.Note.updateOne({_id: req.params.id},req.body)
    .then(doc => {
      console.log(doc);
      res.status(200).send(doc);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

const deleteNote = function(req, res) {
  models.Note.deleteOne({_id: req.params.id})
    .then(doc => {
      console.log("delete note:", doc);
      res.send(doc);
    })
    .catch(e => {
      console.log(e);
    });
};

module.exports = {
  getAllNotes,
  getOneNote,
  createNote,
  editNote,
  deleteNote
};
