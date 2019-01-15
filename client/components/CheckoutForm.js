import React from 'react'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import {processPayment} from '../store/checkout'
import {Cart} from './'
import history from '../history'
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
    this.handleChange = this.handleChange.bind(this)
    this.onToken = this.onToken.bind(this)
  }

  onToken = token => {
    this.props.processPayment(token)
  }

  onClose = () => {
    history.push('/homepage')
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
    return (
      <div>
        <h3>Review Your Cart</h3>
        <Cart />
        <StripeCheckout
          description="Quality You Can Taste..."
          shippingAddress
          amount={2000}
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

const mapState = state => ({})
const mapDispatch = dispatch => ({
  processPayment: credentials => dispatch(processPayment(credentials))
})

export default connect(mapState, mapDispatch)(CheckoutForm)
