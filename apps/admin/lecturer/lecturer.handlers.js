const models = require("../../../models/model");

const getAllLecturers = function(req, res) {
  models.Lecturer.find()
  .then(d => {
    res.send(d);
  })
  .catch(e => {
    console.log(e);
    res.send(e);
  });
};

const getOneLecturer = function(req, res) {
  models.Lecturer.findOne({ number: req.params.number })
      .then(d => {
        res.send(d);
      })
      .catch(e => {
        console.log(e);
        res.send(e);
      });
    
};

const createLecturer = function(req, res) {
    models.Lecturer.create(req.body).then(d=>{
        res.status(200).send(d)
    }).catch(e=>{res.status(400).send(e)})
};

const editLecturer = function(req, res) {
    models.Lecturer.updateOne({number: req.params.number}, req.body).then(d=>{
        res.status(200).send(d)
    }).catch(e=>{res.status(404).send(e)})
};

const deleteLecturer = function(req, res) {
  models.Lecturer.deleteOne({number: req.params.number}).then(d=>{
      res.status(200).send(d)
  }).catch(e=>{res.status(400).send(e)})
};



module.exports = {
  getOneLecturer,
  getAllLecturers,
  createLecturer,
  editLecturer,
  deleteLecturer,
};
