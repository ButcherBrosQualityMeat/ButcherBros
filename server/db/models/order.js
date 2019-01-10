const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  // list of products is an array of arrays where:
  // array[0] = quantity of item
  // array[1] = item id
  // OB/JL: consider instead a join table "Items" where each row has an order id, product id, and quantity
  listOfProducts: {
    // OB/JL: consider JSON as type of each array element
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER))
  },
  // indicates whether order has been completed and paid for
  orderIsComplete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Order
