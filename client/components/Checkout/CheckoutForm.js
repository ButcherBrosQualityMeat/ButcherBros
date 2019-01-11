import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default class TakeMoney extends React.Component {
  constructor() {
    super()
    this.onToken = this.onToken.bind(this)
  }

  onToken = token => {
    console.log('onToken', token)
    fetch('/api/stripe', {
      method: 'POST',
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`)
      })
    })
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
