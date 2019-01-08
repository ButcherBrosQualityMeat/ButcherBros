const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

//returns all products
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll()
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
})

//returns only pork products
router.get('/pork', async (req, res, next) => {
  try {
    const porkProducts = await Product.findAll({
      where: {
        category: 'Pork'
      }
    })
    res.json(porkProducts)
  } catch (err) {
    next(err)
  }
})

//returns only beef products
router.get('/beef', async (req, res, next) => {
  try {
    const beefProducts = await Product.findAll({
      where: {
        category: 'Beef'
      }
    })
    res.json(beefProducts)
  } catch (err) {
    next(err)
  }
})

//returns only chicken products
router.get('/chicken', async (req, res, next) => {
  try {
    const chickenProducts = await Product.findAll({
      where: {
        category: 'Chicken'
      }
    })
    res.json(chickenProducts)
  } catch (err) {
    next(err)
  }
})
