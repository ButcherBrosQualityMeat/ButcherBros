const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Category = require('./category')

/**
 * Associations
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasMany(Order)
Order.belongsTo(User)
Category.hasMany(Product)

module.exports = {
  User,
  Product,
  Order,
  Category
}
