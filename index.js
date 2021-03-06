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
require('./models/User')
require('./models/Survey')
require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoutes')(app)


mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
)
require('./services/passport')

app.get('/', (req, res) => {
  res.send('asd')
})

if (process.env.NODE_ENV === 'prodiction') {
  app.use(express.static('client/build'))

  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
