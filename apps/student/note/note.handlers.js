const models = require('../../../models/model')


const getAllNotes = function(req, res){
    models.Note.find().then(d => {
        res.send(d)
    }
    ).catch(e => {
        console.log(e)
        res.send(e)
    })
}

const getOneNote = function(){
    models.Note.findOne({ username: req.params.username }).then(d => {
        res.send(d)
    }
    ).catch(e => {
        console.log(e)
        res.send(e)
    })
}

const createNote = function(req, res){
    models.Note.create(req.body).then(doc =>{
        console.log('new task:', doc)
        res.send(doc)
    }).catch(e =>{
        console.log(e)
    })
}

const editNote = function(req, res){

}

const deleteNote = function(req, res){
    models.Note.deleteOne(req.body).then(doc =>{
        console.log('new task:', doc)
        res.send(doc)
    }).catch(e =>{
        console.log(e)
    })
}

module.exports = {
getAllNotes,
getOneNote,
createNote,
editNote,
deleteNote
}