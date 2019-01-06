const stripe = require('stripe')(require('../config/keys').stripeSecretKey)

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: 'You must log in!' })
    }

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '',
      source: req.body.id
    })
    req.user.credits += 5
    const user = await req.user.save()
    res.send(user)

    console.log(charge)
  })
}
