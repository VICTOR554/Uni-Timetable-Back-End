const models = require('../../../models/model')


const getAllSessions = function(req, res){

}

const getOneSession = function(req, res){

}

const createSession = function(req, res){
    models.Session.create(req.body).then(doc =>{
        doc.start_date
    })
}

const editSession = function(req, res){

}

const deleteSession = function(req, res){

}

module.exports={
    getOneSession,
    getAllSessions,
    createSession,
    editSession,
    deleteSession
}