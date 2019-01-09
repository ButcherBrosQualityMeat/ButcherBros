const Sequelize = require('sequelize')
const db = require('../db')

// OB/JL: consider (not urgent) more validations, e.g. min for price
const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    // OB/JL: gold standard for currency data is to store it as an integer (measure in cents)
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Product
