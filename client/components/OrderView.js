import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {CartView} from './index'
import {clearCart} from '../store/cart'

class OrderView extends React.Component {
  constructor() {
    super()
    this.state = {
      order: {},
      error: {}
    }
  }

  async componentDidMount() {
    // fetch single order from server
    try {
      const response = await axios.get(
        `/api/orders/${this.props.match.params.orderId}`,
        {
          params: {
            userId: this.props.userId
          }
        }
      )
      const order = response.data
      this.setState(prevState => ({
        ...prevState,
        order
      }))
      // clear cart from server
      await this.props.clearCart()
    } catch (error) {
      this.setState(prevState => ({
        ...prevState,
        error
      }))
    }
  }

  render() {
    // If error returned from attempt to fetch order, display it
    if (this.state.error.response) {
      return (
        <div>{`${this.state.error.response.status} - ${
          this.state.error.response.statusText
        }`}</div>
      )
    }
    // check if both order and product database have loaded
    if (!this.state.order.id || this.props.products.length === 0) {
      return <div>...loading</div>
    }
    const {
      firstName,
      lastName,
      address,
      contents,
      email,
      id,
      totalPrice
    } = this.state.order
    const products = this.props.products
    return (
      <div>
        <h3>Order Info</h3>
        <div>Order Number: {id}</div>
        <div>Name: {`${firstName} ${lastName}`}</div>
        <div>Address: {address}</div>
        <div>Email: {email}</div>
        <div>
          <CartView
            contents={contents}
            products={products}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.product.allProducts,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => ({
  clearCart: () => dispatch(clearCart())
})

const OrderContainer = connect(mapState, mapDispatch)(OrderView)

export default withRouter(OrderContainer)
