const express = require('express')
var morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser)
app.use(cors)

app.get('/', (req, res) => res.send('hello world'))

app.listen(config.port, () => console.log('Listening on port: 8080'))
