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
// item is an object with two properties:
// productId: id of the product
// quantity: number of the product to add to the cart
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

// Cart Reducer
// Cart.contents: an array of objects representing items.
// Each object has two properties: quantity and productId

// Cart.orderId: if user is logged in, orderId of order stored in database
export default function(cart = dummyCart, action) {
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
    default:
      return cart
  }
}
