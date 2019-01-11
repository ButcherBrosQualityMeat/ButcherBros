import axios from 'axios'

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
  return dispatch => {
    const action = addToCart(item)
    dispatch(action)
  }
}

// initial fetch of cart from server (if it exists)
export const fetchCart = () => {
  return async dispatch => {
    const response = await axios.get('api/cart')
    const cart = response.data
    const action = retrievedCart(cart)
    dispatch(action)
  }
}

// update cart on server
export const updateCart = cart => {
  return async dispatch => {
    try {
      await axios.put('api/cart', cart)
    } catch (error) {
      console.error('Cart not updated: ', error)
    }
  }
}

// Cart Reducer
// Cart.contents: an array of objects representing items.
// Each object has two properties: quantity and productId
// Cart.orderId: if user is logged in, orderId of order stored in database
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
