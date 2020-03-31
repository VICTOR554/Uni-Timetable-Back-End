const models = require("../../../models/model");

const getOneLocation = function(req, res) {
  models.Location.findOne({ name: req.params.name })
    .then(d => {
      res.send(d);
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
};

const getAllLocations = function(req, res) {
  models.Location.find()
    .then(d => {
      res.send(d);
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
};

module.exports = {
  getOneLocation,
  getAllLocations
};
