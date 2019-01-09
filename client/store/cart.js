// Initial State
const emptyCart = []

// ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART'

// Action Creators
const addToCart = item => ({
  type: ADD_TO_CART,
  item
})

// Thunk Creators
export const addItemToCart = item => {
  return dispatch => {
    const action = addToCart(item)
    dispatch(action)
  }
}

// Reducer
// Cart is an array of objects representing items.
// Each object has two properties: quantity and productId
export default function(cart = emptyCart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return cart.concat(action.item)
    default:
      return cart
  }
}
