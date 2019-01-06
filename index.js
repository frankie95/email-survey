const express = require('express')
const passport = require('passport')
const keys = require('./config/keys')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./models/user')

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
)
require('./services/passport')

app.get('/', (req, res) => {
  res.send('asd')
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
