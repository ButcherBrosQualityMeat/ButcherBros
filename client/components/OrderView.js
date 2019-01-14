import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

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
    console.log(order)
    this.setState(prevState => ({
      ...prevState,
      order
    }))
  }

  render() {
    if (!this.state.order.id || this.props.products.length === 0) {
      return <div>...loading</div>
    }
    const {firstName, lastName, address, contents, email, id} = this.state.order
    const products = this.props.products
    return (
      <div>
        <h3>Order Info</h3>
        <div>Order Number: {id}</div>
        <div>Name: {`${firstName} ${lastName}`}</div>
        <div>Address: {address}</div>
        <div>Email: {email}</div>
        <div>
          {contents.map(item => {
            const product = products.find(e => e.id === item.productId)
            return (
              <div key={product.id}>{`Name: ${product.name}, Quantity: ${
                item.quantity
              }`}</div>
            )
          })}
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
