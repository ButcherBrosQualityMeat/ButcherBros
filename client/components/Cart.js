import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {CartView} from './index'
import {clearCart} from '../store/'

class CartPresentational extends React.Component {
  handleClear = async () => {
    await this.props.clearCart()
  }

  render() {
    const {cart, products} = this.props
    const contents = cart.contents
    return (
      <div className="container">
        <div className="row">
          <CartView
            contents={contents}
            products={products}
            totalPrice={cart.totalPrice}
          />
        </div>
        <div className="row">
          <Link to="/checkoutform">
            <button type="button">Checkout</button>
          </Link>
        </div>
        <div className="row">
          <button type="button" onClick={this.handleClear}>
            Empty Cart
          </button>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.cart,
  products: state.product.allProducts
})

const mapDispatch = dispatch => ({
  clearCart: () => dispatch(clearCart())
})

const CartContainer = connect(mapState, mapDispatch)(CartPresentational)

export default CartContainer
