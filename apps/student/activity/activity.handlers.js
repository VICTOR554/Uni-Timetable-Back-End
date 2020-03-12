const moment = require('moment')

const models = require('../../../models/model')


const getOneDayActivities = function(req, res){
    models.Activity.find()
    .then(d => {
      res.send(d);
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
}

const getOneActivity = function(req, res){
    models.Activity.findOne()
    .then(d => {
      res.send(d);
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
}


module.exports = {
getOneActivity,
getOneDayActivities,
}