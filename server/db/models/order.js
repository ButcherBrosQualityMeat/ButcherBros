const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  // list of products is an array of JSON objects.
  // Each object has two properties: productId and quantity
  // productId corresponds to ids in the product table
  listOfProducts: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  },
  // indicates whether order has been completed and paid for
  orderIsComplete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Order
