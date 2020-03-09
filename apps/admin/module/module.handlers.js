const models = require('../../../models/model')

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
    models.Module.findOne({ code: req.params.code })
      .then(d => {
        res.send(d);
      })
      .catch(e => {
        console.log(e);
        res.send(e);
      });
  };
  


const createModule = function(req, res) {
    models.Module.create(req.body)
      .then(doc => {
        console.log("new task:", doc);
        res.send(doc);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  const editModule = function(req, res) {
      
  };
  
  const deleteModule = function(req, res) {
    models.Module.deleteOne(req.body)
      .then(doc => {
        console.log("new task:", doc);
        res.send(doc);
      })
      .catch(e => {
        console.log(e);
      });
  };


  module.exports = {
      getAllModules,
      getOneModule,
      createModule,
      editModule,
      deleteModule
  }