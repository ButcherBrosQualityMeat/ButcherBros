import axios from 'axios'
import store from './index'

// Initial State
const emptyCart = {
  contents: [],
  orderId: null
}

// ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART'
const RETRIEVED_CART = 'RETRIEVED_CART'

// Action Creators
// item is an object with two properties:
// productId: id of the product
// quantity: number of the product to add to the cart
const addToCart = item => ({
  type: ADD_TO_CART,
  item
})

const retrievedCart = cart => ({
  type: RETRIEVED_CART,
  cart
})

// Thunk Creators
export const addItemToCart = item => {
  return async dispatch => {
    const action = addToCart(item)
    dispatch(action)
    await axios.put('/api/cart', store.getState().cart)
  }
}

// Initial fetch of cart from server (if it exists)
// followed by storing retrieved cart in redux store
export const fetchCart = () => {
  return async dispatch => {
    const response = await axios.get('/api/cart')
    const cart = response.data
    const action = retrievedCart(cart)
    dispatch(action)
  }
}

// Cart Reducer
// Cart.contents: an array of objects representing items.
// Each object has two properties: quantity and productId

// Cart.orderId: if user is logged in, orderId of order stored in database
/*eslint-disable*/
export default function(cart = emptyCart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // check if product already exists in cart
      const product = cart.contents.find(
        e => e.productId === action.item.productId
      )
      // if product already in cart, add quantity to existing product by returning new array
      if (product) {
        return {
          ...cart,
          contents: cart.contents.map(e => {
            if (e.productId === action.item.productId) {
              return {
                quantity: e.quantity + action.item.quantity,
                productId: e.productId
              }
            } else {
              return {
                productId: e.productId,
                quantity: e.quantity
              }
            }
          })
        }
      } else {
        // otherwise, append item to the cart
        return {
          ...cart,
          contents: cart.contents.concat(action.item)
        }
      }
    case RETRIEVED_CART:
      return action.cart
    default:
      return cart
  }
}
