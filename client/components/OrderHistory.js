import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class OrderHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      error: {}
    }
  }
  async componentDidMount() {
    try {
      const response = await axios.get(`api/orders/user/${this.props.userId}`)
      const orders = response.data
      this.setState(prevState => ({
        ...prevState,
        orders
      }))
    } catch (error) {
      this.setState(prevState => ({
        ...prevState,
        error
      }))
    }
  }

  render() {
    if (this.state.error.response) {
      return (
        <div>{`${this.state.error.reponse.status} - ${
          this.state.error.response.statusText
        }`}</div>
      )
    }
    if (this.state.orders.length === 0) {
      return <div>No Orders to Display</div>
    }
    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th scope="col">Order #</th>
              <th scope="col">Date Created</th>
              <th scope="col">Amount Paid</th>
            </tr>
            {this.state.orders.map(order => {
              return (
                <tr key={order.id}>
                  <td>
                    <Link key={order.id} to={`/order/${order.id}`}>
                      {order.id}
                    </Link>
                  </td>
                  <td>{order.createdAt.slice(0, 10)}</td>
                  <td>{order.totalPrice / 100}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapState = state => ({
  userId: state.user.id
})

const OrderHistoryContainer = connect(mapState, null)(OrderHistory)

export default OrderHistoryContainer
