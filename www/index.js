'use strict'

const express = require('express')

var port = process.env.PORT || 4000;
const app = express()

app.use((req, res, next) => {
  res.send('READY TO RUN NODE SERVER!')
})

app.listen(port)