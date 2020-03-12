const models = require("../../../models/model");


const createStudent = function(req, res){
    models.Student.create(req.body).then(d=>{
        console.log('account created')
        res.status(200).send(d)
    }).catch(e=>{res.status(400).send(e)})
}

const getOneStudent = function(req, res) {
    models.Student.findOne({ number: req.params.number })
        .then(d => {
            res.send(d);
        })
        .catch(e => {
            console.log(e);
            res.send(e);
        }); 
  };

 const getAllStudents = function(req, res) {
  models.Student.find()
  .then(d => {
    res.send(d);
  })
  .catch(e => {
    console.log(e);
    res.send(e);
  });
}; 


module.exports = {
    createStudent,
    getOneStudent,
    getAllStudents
}