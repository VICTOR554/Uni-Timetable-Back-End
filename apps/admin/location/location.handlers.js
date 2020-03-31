const models = require("../../../models/model");

const getOneLocation = function(req, res) {
    models.Location.findOne({ key: req.params.key })
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

  const createLocation = function(req, res) {
    models.Location.create(req.body)
        .then(d => {
          res.send(d);
        })
        .catch(e => {
          console.log(e);
          res.send(e);
        });
      
  };
  const updateLocation = function(req, res) {
    models.Location.updateOne({ key: req.params.key })
        .then(d => {
          res.send(d);
        })
        .catch(e => {
          console.log(e);
          res.send(e);
        });
      
  };

  const deleteOneLocation = function(req, res) {
    models.Location.findOneAndDelete({ key: req.params.key })
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
    getAllLocations,
    createLocation,
    updateLocation,
    deleteOneLocation
    
  };
  