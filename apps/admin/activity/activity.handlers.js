const models = require("../../../models/model");

const getAllActivities = function(req, res) {
  models.Activity.find()
    .then(d => {
      res.send(d);
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
};

const getOneActivity = function(req, res) {
    models.Activity.findOne({ id: req.params.id })
      .then(d => {
        res.send(d);
      })
      .catch(e => {
        console.log(e);
        res.send(e);
      });
};

const createActivity = function(req, res) {
    models.Activity.create(req.body).then(doc=>{
        res.status(200).send(doc)
        console.log(doc)
    }).catch(e=>res.status(400).send(e))
};

const editActivity = function(req, res) {
  models.Activity.findOneAndUpdate({_id: req.params.id}, req.body).then(d=>{
    res.status(200).send(d)
  }).catch(e=>{res.status(400).send(e)})
};

const deleteActivity = function(req, res) {
  models.Activity.deleteOne({_id: req.params.id}).then(d=>{
    res.status(200).send(d)
  }).catch(e=>{res.status(400).send(e)})
};


module.exports = {
  getOneActivity,
  getAllActivities,
  createActivity,
  editActivity,
  deleteActivity,
};
