const moment = require("moment");

const models = require("../../../models/model");

const getAllSessions = function(req, res) {
  models.Session.find()
  .then(d => {
    res.send(d);
  })
  .catch(e => {
    console.log(e);
    res.send(e);
  });
};

const getOneSession = function(req, res) {
  models.Session.findOne({ _id: req.params.id })
      .then(d => {
        res.send(d);
      })
      .catch(e => {
        console.log(e);
        res.send(e);
      });
    
};

const createSession = function(req, res) {

  models.Session.find().then(doc=>{
    if(doc!= null || doc.length!=0){
        getWeeks(req, res)
      
      models.Session.create(req.body)
      .then(doc => {
        console.log("new session:", doc);
        res.status(200).send(doc)
      })
      .catch(e => {
        console.log("error with the sessions:", e);
        res.status(402).send(e)
      });
    }else{
      res.status().send('delete old session first. or update instead')
    }

  })



};

const editSession = function(req, res) {
models.Session.find({_id: req.params.id}).then(d=>{
    if(req.body.start_date){
      models.Week.deleteMany().then(doc=>{
        getWeeks(req, res)
        models.Session.updateOne({_id: req.params.id},req.body,{upsert: true}).then(d=>{
          res.status(200).send(d)
        }).catch(err=>{res.status(400).send(err)})
      }).catch(e=>{res.status(402).send(e)})
    }
  }).catch(e=>{res.status(402).send(e)})
};

const deleteSession = function(req, res) {
  models.Session.deleteMany().then(d=>{
    models.Week.deleteMany().then(doc=>{
      res.status(200).send('Deleted session')
    }).catch(e=>{res.status(400).send(e)})
  }).catch(e=>{res.status(400).send(e)})
};



const getWeeks = function(req, res){
  //start_date = Date(req.body.start_date)
  start_date = moment.unix(req.body.start_date);
  console.log(start_date)
  nweeks = req.body.number_of_weeks;

  for (i = 1; i <= nweeks; i++) {
    week = {};
    dates = [];
    week.number = i;

    for (j = 1; j <= 7; j++) {
      dates.push(start_date);
      start_date = moment(start_date).add(1, "days");
      console.log(start_date)
    }
    week.dates = dates;
    
    models.Week.updateOne({number: week.number},week,{upsert: true})
    .then(d => {
      //console.log("new week:", d);
    })
    .catch(e => {
      console.log("error with the weeks:", e);
      res.status(402).send(e)
    });
  }
}


module.exports = {
  getOneSession,
  getAllSessions,
  createSession,
  editSession,
  deleteSession,
};
