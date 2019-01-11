const router = require('express').Router()
module.exports = router

// GET
// attempt to fetch preexisting cart
router.get('/', (req, res, next) => {
  if (!req.session.cart.contents) {
    req.session.cart = {contents: [], orderId: null}
  }
  console.log('req.session.cart: ', req.session.cart)
  res.json(req.session.cart)
})

// PUT
// create/update preexisting cart on session
router.put('/', (req, res, next) => {
  req.session.cart = req.body
  res.sendStatus(202)
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
