const router = require('express').Router()
module.exports = router

// GET
// attempt to fetch preexisting cart
router.get('/', (req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = {contents: [], orderId: null}
  }
  res.json(req.session.cart)
})

// PUT
// create/update preexisting cart on session with new item
router.put('/', (req, res, next) => {
  req.session.cart = req.body
  res.sendStatus(204)
})

// create/update item in cart contents
// req.body will be an object with quantity and productId
router.put('/item', (req, res, next) => {
  const item = req.session.cart.contents.find(
    e => e.productId === req.body.productId
  )
  if (item) {
    item.quantity += req.body.quantity
  } else {
    req.session.cart.contents.push(req.body)
  }
  res.json(req.session.cart)
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
