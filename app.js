const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = (process.env.PORT || 3000)

const models = require('./models/model')
const student = require('./apps/student/student')
const admin = require('./apps/admin/admin')

console.log(process.env.NODE_ENV);

require('dotenv').config()

app.use(bodyParser.json())

app.use(express.static('./apidoc')) 

app.use('/student', student)
app.use('/admin', admin)

app.get('/', function(req, res){
    res.send('hi guys')
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})