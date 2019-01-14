const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  // list of products is an array of JSON objects.
  // Each object has two properties: productId and quantity
  // productId corresponds to ids in the product table
  contents: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  // indicates whether order has been completed and paid for
  orderIsComplete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Order
