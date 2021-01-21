// import express from 'express'
const express = require('express')
const path = require('path');
// import cors from 'cors'
const cors = require('cors')
// import routes from './routes'
// import mongoose from 'mongoose'
const mongoose = require('mongoose')
// import cupsRoute from './routes/cups'
const cupsRoute = require('./routes/cups')

require('dotenv').config()
const app = express()

// init middleware
app.use(cors())
app.use(express.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})
app.use('/api', cupsRoute)

const port = process.env.PORT || 4000
const dboptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  auto_reconnect: true,
  useUnifiedTopology: true,
  poolSize: 10
}
// TODO : connect mongodb here
if (!process.env.MONGO_URL) {
  console.error('Missing MONGO_URL!!!')
  process.exit(1)
}
mongoose.connect(process.env.MONGO_URL, dboptions)

const db = mongoose.connection
db.once('open', () => {
  console.log('MongoDB connected!')
})

// routes(app)

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})

if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
}
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});