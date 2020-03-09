const models = require('../../../models/model')


const getAllTerms = function(req, res){
    models.Term.find()
  .then(d => {
    res.send(d);
  })
  .catch(e => {
    console.log(e);
    res.send(e);
  });

}

const getOneTerm = function(req, res){
    models.Term.findOne({ id: req.params.id })
      .then(d => {
        res.send(d);
      })
      .catch(e => {
        console.log(e);
        res.send(e);
      });

}

const createTerm = function(req, res){

}

const editTerm = function(req, res){

}

const deleteTerm = function(req, res){

}

module.exports={
    getOneTerm,
    getAllTerms,
    createTerm,
    editTerm,
    deleteTerm
}