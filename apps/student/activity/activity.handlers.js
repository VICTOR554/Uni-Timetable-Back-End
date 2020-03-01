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
    models.Activity.findOne({ username: req.params.username })
    .then(d => {
      res.send(d);
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
}


const createActivity = function(req, res){
    models.Activity.create(req.body)
    .then(doc => {
      console.log("new task:", doc);
      res.send(doc);
    })
    .catch(e => {
      console.log(e);
    });
}

const editActivity = function(req, res){

}

const deleteActivity = function(req, res){
    models.Activity.deleteOne(req.body)
    .then(doc => {
      console.log("new task:", doc);
      res.send(doc);
    })
    .catch(e => {
      console.log(e);
    });

}



module.exports = {
getOneActivity,
getOneDayActivities,


createActivity,
editActivity,
deleteActivity
}