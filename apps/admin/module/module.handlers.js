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
        console.log("new module:", doc);
        res.send(doc);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  const editModule = function(req, res) {
      models.Module.updateOne({code: req.params.code}).then(d=>{
        res.status(200).send('edited module', d)
      }).catch(e=>{res.status(402).send(e)})
  };
  
  const deleteModule = function(req, res) {
    models.Module.deleteOne({code: req.param.code})
      .then(doc => {
        //console.log(doc);
        res.send(doc);
      })
      .catch(e => {
        res.status(400).send(e);
      });
  };


  module.exports = {
      getAllModules,
      getOneModule,
      createModule,
      editModule,
      deleteModule
  }