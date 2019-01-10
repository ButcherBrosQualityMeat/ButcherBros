// Initial State
const emptyCart = {
  contents: [],
  orderId: null
}

const dummyCart = {
  contents: [
    {quantity: 1, productId: 1},
    {quantity: 2, productId: 2},
    {quantity: 3, productId: 3}
  ],
  orderId: null
}

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
export default function(cart = dummyCart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...cart,
        contenst: cart.contents.concat(action.item)
      }
    default:
      return cart
  }
}
