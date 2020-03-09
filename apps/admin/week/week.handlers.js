const models = require('../../../models/model')


const getAllWeeks = function(req, res){
    models.Week.find()
  .then(d => {
    res.send(d);
  })
  .catch(e => {
    console.log(e);
    res.send(e);
  });

}

const getOneWeek = function(req, res){
    models.Week.findOne({ id: req.params.id })
      .then(d => {
        res.send(d);
      })
      .catch(e => {
        console.log(e);
        res.send(e);
      });

}

module.exports={
    getOneWeek,
    getAllWeeks,
}