const router = require('express').Router()
module.exports = router
const privateStripeKey = require('../../secrets.js').privateStripeKey

const keySecret = process.env.sk_test_Slu9Ke92GB9KPYhlsZIwySgU
//determine if keySectret should equal key alone or include process.env.

const stripe = require('stripe')(privateStripeKey)

router.post('/charge', (req, res) => {
  let amount = 500

  stripe.customers
    .create({
      email: req.body.email,
      card: req.body.id,
      description: req.body.description,
      address: req.body.address,
      phone: req.body.phone
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: 'Sample Charge',
        currency: 'usd',
        customer: customer.id
      })
    )
    .then(charge => res.send(charge))
    .catch(err => {
      console.log('Error:', err)
      res.status(500).send({error: 'Purchase Failed'})
    })
})
