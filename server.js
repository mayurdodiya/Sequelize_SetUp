var express = require('express')
var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const db = require('./app/models')
// db.sequelize.sync()

require('./app/routes/pincode.routes')(app)

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)