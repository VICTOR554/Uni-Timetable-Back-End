const models = require("../../../models/model");

const getAllCourses = function(req, res) {
  models.Course.find()
  .then(d => {
    res.send(d);
  })
  .catch(e => {
    console.log(e);
    res.send(e);
  });
};

const getOneCourse = function(req, res) {
  models.Course.findOne({ _id: req.params.id })
      .then(d => {
        res.send(d);
      })
      .catch(e => {
        console.log(e);
        res.send(e);
      });
    
};

const createCourse = function(req, res) {
    models.Course.create(req.body).then(d=>{
        res.status(200).send(d)
    }).catch(e=>{res.status(400).send(e)})
};

const editCourse = function(req, res) {
    models.Course.updateOne({_id: req.params.id}, req.body).then(d=>{
        res.status(200).send(d)
    }).catch(e=>{res.status(404).send(e)})
};

const deleteCourse = function(req, res) {
  models.Course.deleteMany().then(d=>{
      res.status(200).send(d)
  }).catch(e=>{res.status(400).send(e)})
};



module.exports = {
  getOneCourse,
  getAllCourses,
  createCourse,
  editCourse,
  deleteCourse,
};
