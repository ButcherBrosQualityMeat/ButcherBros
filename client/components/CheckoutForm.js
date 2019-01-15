import React from 'react'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import {processPayment} from '../store/checkout'
import {CartView} from './'
import history from '../history'
import axios from 'axios'
const publicStripeKey = require('../../secrets').publicStripeKey

class CheckoutForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      email: ''
    }
    this.orderID = null
    this.handleChange = this.handleChange.bind(this)
    this.onToken = this.onToken.bind(this)
  }

  onToken = async token => {
    console.log(token)
    const contents = this.props.cart.contents
    const email = token.email
    const address =
      token.card.address_line1 +
      token.card.address_city +
      token.card.address_state +
      token.card.address_zip +
      token.card.country

    const name = token.card.name.split(' ')
    const firstName = name[0]
    const lastName = name[1]
    const totalPrice = this.props.totalPrice
    const newOrderInfo = {
      contents,
      email,
      address,
      firstName,
      lastName,
      totalPrice
    }
    const response = await axios.post('/api/orders/', newOrderInfo)
    this.props.processPayment(token)
    history.push(`/order/${response.data.id}`)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  render() {
    const {cart, products} = this.props
    return (
      <div>
        <h3>Review Your Cart</h3>
        <CartView
          contents={cart.contents}
          products={products}
          totalPrice={cart.totalPrice}
        />
        <StripeCheckout
          description="Quality You Can Taste..."
          shippingAddress
          amount={this.props.totalPrice}
          billingAddress
          name="Butcher Bros"
          image="https://images.vexels.com/media/users/3/143248/isolated/preview/9a073ffe6b6bd3508dd0f6e4da820c9a-steak-stroke-icon-by-vexels.png"
          token={this.onToken}
          stripeKey={publicStripeKey}
          closed={this.onClose}
          label="Pay with 💳"
        />
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.cart,
  products: state.product.allProducts,
  totalPrice: state.cart.totalPrice
})
const mapDispatch = dispatch => ({
  processPayment: credentials => dispatch(processPayment(credentials))
})

export default connect(mapState, mapDispatch)(CheckoutForm)
