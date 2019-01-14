import React from 'react'
import axios from 'axios'
import {Link, withRouter} from 'react-router-dom'
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
  }

  render() {
    if (!this.state.order.id) {
      return <div>...loading</div>
    }

    return <div>Order Info Here</div>
  }
}

export default withRouter(OrderView)
