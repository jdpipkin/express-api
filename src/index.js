const express = require('express')
const config = require('./config')

const app = express()

app.get('/brandon', (req, res) => res.send('hello world'))

app.listen(config.port, () => console.log('Listening on port: 8080'))
