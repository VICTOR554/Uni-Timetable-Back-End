const moment = require("moment");

const models = require("../../../models/model");

const getOneActivity = function(req, res) {
  models.Activity.findOne({ _id: req.params.id })
    .then(d => {
      res.status(200).send(d);
    })
    .catch(e => {
      console.log(e);
      res.status(200).send(e);
    });
}

const getModules = function(req, res, next) {
  models.Student.findOne({ number: req.student.number })
    .then(d => {
      req.modules = d.modules;
      next();
    })
    .catch(e => {
      res.send(e);
    });
};
const getModuleActivities = async function(
  element,
  start_date_time,
  end_date_time
) {
  a = await models.Activity.find({
    module_code: element,
    start_date_time: { $gt: start_date_time, $lt: end_date_time }
  });
  return a;
};
const getActivities = async function(req, res, next) {
  date_time = req.params.start_date_time;
  start_date_time = moment
    .unix(date_time)
    .startOf("day")
    .format("X");
  console.log(start_date_time);
  end_date_time = moment
    .unix(date_time)
    .endOf("day")
    .format("X");
  console.log(end_date_time);
  let activities = [];

  await req.modules.forEach(async element => {
    module_activities = await getModuleActivities(
      element,
      start_date_time,
      end_date_time
    );
    activities = await activities.concat(module_activities);
    req.activities = activities;
    return activities;
  });

  setTimeout(() => {
    next();
  }, 500);
};

const getOneDayActivities = function(req, res) {
  res.send(req.activities);
};

module.exports = {
  getOneActivity,
  getOneDayActivities,
  getModules,
  getActivities
};
