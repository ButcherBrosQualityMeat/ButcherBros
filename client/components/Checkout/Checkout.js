import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import Axios from 'axios'
import {processPayment} from '../../store/checkout'

class TakeMoney extends React.Component {
  constructor() {
    super()
    this.onToken = this.onToken.bind(this)
  }

  // onToken = token => {
  //   console.log('onToken', token)
  //   fetch('/api/stripe/charge', {
  //     method: 'POST',
  //     body: JSON.stringify(token)
  //   }).then(response => {
  //     response.json().then(data => {
  //       alert(`We are in business, ${data.email}`)
  //     })
  //   })
  // }
  onToken = token => {
    console.log('onToken', token)
    // token.phone = '8052668426'
    token.card.address_country = 'USA'
    token.card.address_line1 = '123 Main St.'
    this.props.processPayment(token)
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_IKvGHmimQ1OH1sDz6RBtoaBE"
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processPayment: credentials => dispatch(processPayment(credentials))
  }
}

const mapStateToDispatch = state => {
  return {}
}

export default connect(mapStateToDispatch, mapDispatchToProps)(TakeMoney)
