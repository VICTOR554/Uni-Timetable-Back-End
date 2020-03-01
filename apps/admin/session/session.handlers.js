const moment = require("moment");

const models = require("../../../models/model");

const getAllSessions = function(req, res) {
  res.send("hi");
};

const getOneSession = function(req, res) {
    
};

const createSession = function(req, res) {
  start_date_iso = moment(req.body.start_date_iso);
  nweeks = req.body.number_of_weeks;

  for (i = 1; i <= nweeks; i++) {
    week = {};
    dates = [];
    week.number = i;

    for (j = 1; j <= 7; j++) {
      dates.push(start_date_iso.toString());
      start_date_iso = moment(start_date_iso).add(1, "days");
    }
    week.dates = dates;
    
    models.Week.create(week)
    .then(d => {
      console.log("new week:", d);
    })
    .catch(e => {
      console.log("error with the weeks:", e);
      res.status(402).send(e)
    });
  }

  models.Session.create(req.body)
  .then(doc => {
    console.log("new session:", doc);
    res.status(200).send(doc)
  })
  .catch(e => {
    console.log("error with the sessions:", e);
    res.status(402).send(e)
  });

};

const editSession = function(req, res) {};

const deleteSession = function(req, res) {};

//MIDDLEWARE
async function convertDates(req, res, next) {
  const start_date_iso = new Date(
    `${req.body.start_date.year}, ${req.body.start_date.month}, ${req.body.start_date.day}`
  );
  req.body.start_date_iso = start_date_iso;

  next();
}

module.exports = {
  getOneSession,
  getAllSessions,
  createSession,
  editSession,
  deleteSession,

  convertDates
};
