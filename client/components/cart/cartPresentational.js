import React from 'react'
import {Link, withRouter} from 'react-router-dom'

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
    let totalPrice = 0
    return (
      <div className="container">
        <div className="row">
          <table className="table">
            <tbody>
              <tr>
                <th scope="col">Quantity</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
              </tr>
              {contents.map(item => {
                const product = products.find(e => e.id === item.productId)
                totalPrice += parseInt(product.price * item.quantity, 10) / 100
                return (
                  <tr key={product.id}>
                    <td>{item.quantity}</td>
                    <td>{product.name}</td>
                    <td>${product.price * item.quantity / 100}</td>
                  </tr>
                )
              })}
              <tr>
                <td />
                <td>
                  <b>Total</b>
                </td>
                <td>
                  <b>${totalPrice}</b>
                </td>
              </tr>
            </tbody>
          </table>
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

export default withRouter(CartPresentational)
