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
  models.Module.findOne({ username: req.params.username })
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

  createNote,
  editNote,
  deleteNote
};
