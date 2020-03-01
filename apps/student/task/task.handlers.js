const models = require('../../../models/model')


const getAllTasks = function(req, res){
    models.Task.find().then(d => {
        res.send(d)
    }
    ).catch(e => {
        console.log(e)
        res.send(e)
    })
}

// dont know what to replace username with
const getOneTask = function(req, res){
    models.Task.findOne({ username: req.params.username, _id: req.params._id }).then(d => {
        res.send(d)
    }
    ).catch(e => {
        console.log(e)
        res.send(e)
    })


}

const createTask = function(req, res){
    models.Task.create(req.body).then(doc =>{
        console.log('new task:', doc)
        res.send(doc)
    }).catch(e =>{
        console.log(e)
    })
}

const editTask = function(req, res){

}

const deleteTask = function(req, res){
    models.Task.deleteOne(req.body).then(doc =>{
        console.log('new task:', doc)
        res.send(doc)
    }).catch(e =>{
        console.log(e)
    })

}


module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    editTask,
    deleteTask
}