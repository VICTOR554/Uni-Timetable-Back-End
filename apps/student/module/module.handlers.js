const models = require("../../../models/model");

const getAllModules = function(req, res) {
  models.Module.find()
    .then(d => {
      res.send(d);
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
};

const getOneModule = function(req, res) {
  models.Module.findOne({code: req.params.code })
    .then(d => {
      res.send(d);
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
};



module.exports = {
  getAllModules,
  getOneModule,
};
