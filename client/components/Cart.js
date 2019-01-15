import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {CartView} from './index'

class CartPresentational extends React.Component {
  render() {
    const {cart, products} = this.props
    const contents = cart.contents
    if (contents.length === 0 || products.length === 0)
      return (
        <div className="container">
          <div className="row">Cart is Empty</div>
        </div>
      )
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
          {this.props.location.pathname === '/cart' && (
            <Link to="/checkoutform">
              <button type="button">Checkout</button>
            </Link>
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart,
    products: state.product.allProducts
  }
}

const CartContainer = connect(mapState, null)(CartPresentational)

export default withRouter(CartContainer)
