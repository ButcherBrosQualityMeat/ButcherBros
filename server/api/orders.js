const router = require('express').Router()
const {Order} = require('../db/models')

module.exports = router

// GET
router.get('/:orderId', async (req, res, next) => {
  try {
    //if theres a User
    if (req.user) {
      const userId = +req.query.userId
      if (userId === +req.user.id) {
        const order = await Order.findById(req.params.orderId)
        res.json(order)
      } else {
        res.status(401).end()
      }
    } else {
      // // if there is not a user
      const orders = await Order.findAll({
        limit: 1,
        where: {
          userId: null
        },
        order: [['createdAt', 'DESC']]
      })
      if (orders[0].id === +req.params.orderId) {
        res.json(orders[0])
      } else {
        res.status(401).end()
      }
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
