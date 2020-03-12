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

const getOneModule = function() {
  models.Module.findOne({_id: req.params.id })
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
