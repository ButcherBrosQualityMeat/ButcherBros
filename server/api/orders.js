const router = require('express').Router()
const {Order} = require('../db/models')

module.exports = router

// GET

// POST
router.post('/', async (req, res, next) => {})

// PUT

// DELETE

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
