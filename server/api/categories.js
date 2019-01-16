const router = require('express').Router()
const {Category, Product} = require('../db/models')
module.exports = router

//returns all categories
router.get('/', async (req, res, next) => {
  try {
    const allCategories = await Category.findAll({
      include: [{model: Product}],
      order: ['id']
    })
    res.json(allCategories)
  } catch (err) {
    next(err)
  }
})

// returns a specific category with related products eager loaded
router.get('/:id', async (req, res, next) => {
  const categoryId = req.params.id
  try {
    const singleCategory = await Category.findById(categoryId, {
      include: [{model: Product}]
    })
    res.json(singleCategory)
  } catch (err) {
    next(err)
  }
})
