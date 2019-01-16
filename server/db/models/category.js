const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  carImg: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Category
