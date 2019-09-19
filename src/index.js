const express = require('express')
var morgan = require('morgan')
const cors = require('cors')
const config = require('./config')

const app = express()
app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.status(200).end();
});
app.head('/status', (req, res) => {
  res.status(200).end();
});


app.get('/', (req, res) => res.send('hello world'))

app.listen(config.port, () => console.log('Listening on port: 8080'))
