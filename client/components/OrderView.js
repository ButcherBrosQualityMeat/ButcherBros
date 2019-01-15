import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {CartView} from './index'

class OrderView extends React.Component {
  constructor() {
    super()
    this.state = {
      order: {}
    }
  }

  async componentDidMount() {
    // fetch order from server
    const response = await axios.get(
      `/api/orders/${this.props.match.params.orderId}`
    )
    const order = response.data
    this.setState(prevState => ({
      ...prevState,
      order
    }))
  }

  render() {
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
    products: state.product.allProducts
  }
}

const OrderContainer = connect(mapState, null)(OrderView)

export default withRouter(OrderContainer)
