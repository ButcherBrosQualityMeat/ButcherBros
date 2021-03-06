import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  About,
  HomePage,
  SinglePageView,
  AllProducts,
  SingleCategory,
  Cart,
  CheckoutForm,
  OrderView,
  OrderHistory
} from './components'
import {me} from './store'
import {fetchAllProducts, fetchAllCategories} from './store/product'
import {fetchCart} from './store/cart'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.fetchAllProducts()
    this.props.fetchAllCategories()
    this.props.fetchCart()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/About" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/products/:id" component={SinglePageView} />
        <Route path="/products" component={AllProducts} />
        <Route path="/categories/:id" component={SingleCategory} />
        <Route path="/checkoutform" component={CheckoutForm} />
        <Route path="/order/:orderId" component={OrderView} />
        <Route path="/orderhistory" component={OrderHistory} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route component={HomePage} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={HomePage} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    fetchAllProducts() {
      dispatch(fetchAllProducts())
    },
    fetchAllCategories() {
      dispatch(fetchAllCategories())
    },
    fetchCart() {
      dispatch(fetchCart())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
