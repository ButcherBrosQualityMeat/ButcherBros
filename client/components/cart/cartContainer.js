import {connect} from 'react-redux'

import CartPresentational from './cartPresentational'

const mapState = state => {
  return {
    cart: state.cart,
    products: state.product.allProducts
  }
}

const CartContainer = connect(mapState, null)(CartPresentational)

export default CartContainer
