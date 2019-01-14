import React from 'react'
import {connect} from 'react-redux'
import {Cart} from './'

class CheckoutForm extends React.Component {
  render() {
    return (
      <div>
        <Cart />
      </div>
    )
  }
}

const mapState = state => ({})
const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(CheckoutForm)
