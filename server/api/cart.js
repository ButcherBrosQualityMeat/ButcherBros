const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

// GET
// attempt to fetch preexisting cart
router.get('/', (req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = {contents: [], orderId: null, totalPrice: 0}
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
router.put('/item', async (req, res, next) => {
  try {
    // find product in database and multiply by supplied quantity
    // to update total price of cart
    const product = await Product.findById(req.body.productId)
    req.session.cart.totalPrice += req.body.quantity * product.price

    // check if item is already present in cart
    const item = req.session.cart.contents.find(
      e => e.productId === req.body.productId
    )
    if (item) {
      item.quantity += req.body.quantity
    } else {
      req.session.cart.contents.push(req.body)
    }
    res.json(req.session.cart)
  } catch (error) {
    next(error)
  }
})

// clear contents of cart on session object
router.delete('/', (req, res, next) => {
  req.session.cart = {contents: [], orderId: null, totalPrice: 0}
  res.json(req.session.cart)
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
