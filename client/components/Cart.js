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
      <div className="mt-4 container">
        <h3 id="cat-name" className="mb-4">
          Cart
        </h3>
        <div className="mt-75 row">
          <CartView
            contents={contents}
            products={products}
            totalPrice={cart.totalPrice}
          />
        </div>
        <div className="mb-3 d-flex justify-content-end row">
          {contents.length !== 0 && (
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.handleClear}
            >
              Empty Cart
            </button>
          )}
        </div>
        <div className="mb-3 d-flex justify-content-end row">
          <Link to="/checkoutform">
            <button className="btn btn-dark" type="button">
              Checkout
            </button>
          </Link>
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
