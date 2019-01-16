'use strict'

// Tests:
// React - CartView Component
// Sequelize - Order Model
// Express - Order Route
// React-Redux - Cart Action Creator

// Assertions
const chai = require('chai')
const expect = chai.expect

// Order Model
const db = require('../server/db')
const Order = db.model('order')

// Order Routes
const app = require('../server')
const agent = require('supertest')(app)

// CartView component
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
enzyme.configure({adapter: new Adapter()})
import React from 'react'
import CartView from '../client/components/CartView'

// Redux
import {retrievedCart} from '../client/store/cart'

// Test Order model
describe('Order model', () => {
  describe('Default Values', () => {
    it('orderIsComplete defaults to false', () => {
      const order = Order.build()
      expect(order.orderIsComplete).to.be.equal(false)
    })
  })
})

// Test Order Route
describe('POST `/api/orders`', () => {
  const testOrder = {
    firstName: 'Joe',
    lastName: 'MeatGuy',
    address: '1111 Meat Street, Meatville, CA',
    email: 'numberonemeatbro@meat.com',
    orderIsComplete: true,
    contents: [{quantity: 1, productId: 1}, {quantity: 2, productId: 2}],
    totalPrice: 5200
  }

  it('returns the newly created order', async () => {
    await agent.post('/api/orders', testOrder).expect(201)
  })
})

// Test Cart View
describe('Cart View Functional Component', () => {
  const contents = []
  const totalPrice = 0
  const products = []
  it('Displays nothing if contents and products arrays are empty', () => {
    const renderedCartView = shallow(
      <CartView
        contents={contents}
        products={products}
        totalPrice={totalPrice}
      />
    )
    expect(renderedCartView.find('div')).to.have.length(2)
  })
})

// Test Cart Redux Store
describe('Describe retrievedCart Action Creator', () => {
  const cartItemOne = {quantity: 1, productId: 1}
  const cartItemTwo = {quantity: 2, productId: 5}

  const populatedCart = {
    contents: [cartItemOne, cartItemTwo],
    totalPrice: 50
  }

  const retrievedCartAction = retrievedCart(populatedCart)

  it('returns a Plain Old JavaScript Object', () => {
    expect(typeof retrievedCartAction).to.equal('object')
    expect(Object.getPrototypeOf(retrievedCartAction)).to.equal(
      Object.prototype
    )
  })
  it('has a cart with a contents property', () => {
    expect(retrievedCartAction.cart.contents.length).to.equal(2)
  })
})
