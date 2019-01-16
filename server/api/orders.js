const router = require('express').Router()
const {Order} = require('../db/models')

module.exports = router

// GET
// Retrieve single order by order id
router.get('/:orderId', async (req, res, next) => {
  try {
    //if theres a User
    if (req.user) {
      const userId = +req.query.userId
      const order = await Order.findById(req.params.orderId)
      if (userId === +req.user.id && order.userId === userId) {
        res.json(order)
      } else {
        res.status(401).end()
      }
    } else {
      const order = req.session.orders.find(e => e.id === +req.params.orderId)
      if (order) {
        res.json(order)
      } else {
        res.status(401).end()
      }
    }
  } catch (error) {
    next(error)
  }
})

// Get all orders completed by a single user
router.get('/user/:userId', async (req, res, next) => {
  try {
    console.log('req.user.id: ', req.user.id)
    if (req.user.id === +req.params.userId) {
      console.log('getting orders')
      const userOrders = await Order.findAll({
        where: {
          userId: req.params.userId
        }
      })
      console.log(userOrders[0])
      console.log('# of orders: ', userOrders.length)
      res.json(userOrders)
    } else {
      console.log('got no orders')
      res.json([])
    }
  } catch (error) {
    next(error)
  }
})

// POST
router.post('/', async (req, res, next) => {
  try {
    const order = await Order.create(req.body)
    if (!req.session.orders) {
      req.session.orders = [order]
    } else {
      req.session.orders.push(order)
    }
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
