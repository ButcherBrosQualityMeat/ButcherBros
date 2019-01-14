import React from 'react'
import {connect} from 'react-redux'
import {Cart} from './'

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
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            size="50"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            size="50"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            size="50"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            size="50"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Submit Order</button>
        </form>
      </div>
    )
  }
}

const mapState = state => ({})
const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(CheckoutForm)
