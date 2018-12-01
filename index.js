const express = require('express')
const app = express()
require('./services/passport')
require('./routes/authRoutes')(app)
const keys = require('./config/keys')
const mongoose=require('mongoose')

mongoose.connect(keys.mongoURI,{ useNewUrlParser: true })



  app.get('/', (req, res) => {
    res.send('asd')
  })

  const PORT = process.env.PORT || 5000
  app.listen(PORT)

