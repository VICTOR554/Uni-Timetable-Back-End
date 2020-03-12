const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var jwt = require('jsonwebtoken')

const port = (process.env.PORT || 3000)

const models = require('./models/model')
const student = require('./apps/student/student')
const admin = require('./apps/admin/admin')



require('dotenv').config()

app.use(bodyParser.json())

app.use(express.static('./apidoc')) 

app.post('/login', function (req, res) {
    var filter = { number: req.body.number }
    models.Student.findOne(filter).then(d => {
        if (d !== null) {
            console.log(`found account`)
            if(req.body.password == d.password){
                console.log(`correct password`)
                var token = jwt.sign(filter, 'my_secret_key')
                res.json({
                    token: "bearer " + token
                })    
            } else {
                console.log('wrong password')
                res.json({ text: 'wrong username or password' })
            }
        } else {
            console.log(`account doesn't exist`)
            res.json({ text: 'wrong username or password' })
        }
    }).catch(e => {
        console.log(e)
        res.json({
            error: e
        })
    })
})


app.use('/admin', admin)

app.get('/', function(req, res){
    res.send('hi guys')
})

app.use('/student', ensureToken, function (req, res) {
    jwt.verify(req.token, 'my_secret_key', function (err, data) {
        if (err) {
            res.sendStatus(403)
        } else {
            student(req, res)
        }
    })
})

function ensureToken(req, res, next) {
    const bearerHeader = req.headers.auth
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        req.token = bearerToken;
        const student = jwt.decode(bearerToken)
        req.student = student
        req.student_number = student.student_number
        next()
    } else {
        res.sendStatus(403)
    }
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})