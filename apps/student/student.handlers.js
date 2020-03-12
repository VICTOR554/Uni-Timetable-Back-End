const models = require('../../models/model')


const editStudent = function(req, res){
    models.Student.updateOne(req.body).then(doc =>{
        console.log('edited student:', doc)
        res.send(doc)
    }).catch(e =>{
        console.log(e)
    })
}

const getStudent = function(req, res){
    models.Student.findOne({number: req.student_number}).then(d=>{
        res.status(200).send(d)
    }).catch(e=>{res.status(400).send(e)})
}

module.exports = {
    editStudent,
    getStudent
}