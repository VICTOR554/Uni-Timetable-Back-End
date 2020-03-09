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
    models.Term.create(req.body).then(d=>{
        res.status(200).send(d)
    }).catch(e=>{res.status(400).send(e)})
}

const editTerm = function(req, res){
    models.Term.updateOne({number: req.params.number}, req.body).then(d=>{
        res.status(200).send(d)
    }).catch(e=>{res.status(400).send(e)})
}

const deleteTerm = function(req, res){
    models.Term.deleteOne({code: req.param.number})
      .then(doc => {
        res.send(doc);
      })
      .catch(e => {
        res.status(400).send(e);
      });
}

module.exports={
    getOneTerm,
    getAllTerms,
    createTerm,
    editTerm,
    deleteTerm
}