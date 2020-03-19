const models = require("../../../models/model");


const createStudent = function(req, res){
    models.Student.create(req.body).then(d=>{
        console.log('account created')
        res.status(200).send(d)
    }).catch(e=>{res.status(400).send(e)})
}

const editStudent = function(req, res){
    models.Student.updateOne({number: req.params.number}, req.body).then(d=>{
        models.Student.findOne({number: req.params.number}).then(doc=>{
            res.status(200).send(doc)
            console.log('updated user:', doc)
        })
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
    getAllStudents,
    editStudent
}