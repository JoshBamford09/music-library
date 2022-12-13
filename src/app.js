/* eslint-disable semi */
const express = require('express')

const app = express()

app.use(express.json())

module.exports = app

app.get('/', (req, res) => {
  res.send({ response: 'Hello world' })
})
