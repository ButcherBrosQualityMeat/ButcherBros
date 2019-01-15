import axios from 'axios'

// Initial State
const emptyCart = {
  contents: [],
  orderId: null
}

// ACTION TYPES
const RETRIEVED_CART = 'RETRIEVED_CART'

// Action Creators
const retrievedCart = cart => ({
  type: RETRIEVED_CART,
  cart
})

// Thunk Creators
export const addItemToCart = item => {
  return async dispatch => {
    const response = await axios.put('/api/cart/item', item)
    const cart = response.data
    const action = retrievedCart(cart)
    dispatch(action)
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
export default function(cart = emptyCart, action) {
  switch (action.type) {
    case RETRIEVED_CART:
      return action.cart
    default:
      return cart
  }
}
