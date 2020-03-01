const models = require('../../models/model')


const editStudent = function(req, res){
    models.Student.updateOne(req.body).then(doc =>{
        console.log('edited student:', doc)
        res.send(doc)
    }).catch(e =>{
        console.log(e)
    })

}




const createStudent = function(req, res){
    models.Student.create(req.body).then(doc =>{
        console.log('new student:', doc)
        res.send(doc)
    }).catch(e =>{
        console.log(e)
    })
}

const deleteStudent = function(req, res){
    models.Student.deleteOne(req.body).then(doc =>{
        console.log('deleted student:', doc)
        res.send(doc)
    }).catch(e =>{
        console.log(e)
    })
}


module.exports = {
    editStudent,
    createStudent,
    deleteStudent
}