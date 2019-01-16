'use strict'

// Tests:
// React - C Component
// Sequelize - Order Model
// Express - Order Route
// React-Redux - Cart Reducer

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
import reducer, {RETRIEVED_CART, fetchCart} from '../client/store/cart'

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

// Test Cart Redux Store/Reducer
describe('Cart Reducer', () => {
  const initialState = {
    contents: [],
    totalPrice: 0
  }

  const cartItemOne = {quantity: 1, productId: 1}
  const cartItemTwo = {quantity: 2, productId: 5}

  const populatedCart = {
    contents: [cartItemOne, cartItemTwo],
    totalPrice: 50
  }

  const newState = reducer(initialState, {
    type: RETRIEVED_CART,
    cart: populatedCart
  })
  console.log('newState: ', newState)

  it('returns a new state with updated cart', () => {
    expect(newState).to.deep.equal(populatedCart)
  })
})
