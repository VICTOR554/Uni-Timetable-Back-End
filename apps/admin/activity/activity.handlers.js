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
    models.Activity.findOne(req.body).then(doc=>{
        res.send(doc)
        console.log(doc)
    }).catch(e=>res.status().send(e))
};

const editActivity = function(req, res) {};

const deleteActivity = function(req, res) {};



//MIDDLEWARE
async function convertDates(req, res, next) {
    const start_date_iso = new Date(
      `${req.body.start_date.year}, ${req.body.start_date.month}, ${req.body.start_date.day},
        ${req.body.start_date.hour}`
    );
    const end_date_iso = new Date(
        `${req.body.end_date.year}, ${req.body.end_date.month}, ${req.body.end_date.day},
          ${req.body.end_date.hour}`
      );
    req.body.start_date_time_iso = start_date_iso;
    req.body.end_date_time_iso = end_date_iso;
  
    next();
  }


module.exports = {
  getOneActivity,
  getAllActivities,
  createActivity,
  editActivity,
  deleteActivity,



  convertDates
};
