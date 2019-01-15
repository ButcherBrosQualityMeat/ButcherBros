const router = require('express').Router()
const {Order} = require('../db/models')

module.exports = router

// GET
router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderId)
    res.json(order)
  } catch (error) {
    next(error)
  }
})

// POST
router.post('/', async (req, res, next) => {
  try {
    const order = await Order.create(req.body)
    res.status(201).json(order)
  } catch (error) {
    next(error)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
