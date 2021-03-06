import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, cart, categories}) => {
  const newCart = cart.map(item => {
    return Number(item.quantity)
  })
  let cartNum
  if (newCart.length) {
    cartNum = newCart.reduce((acc, cv) => acc + cv)
  }
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    >
      {isLoggedIn ? (
        <div className="container">
          <a className="navbar-brand" href="/homepage">
            Butcher Bros
            {'      '}
            <img
              height="40px"
              width="40px"
              src="https://images.vexels.com/media/users/3/143248/isolated/preview/9a073ffe6b6bd3508dd0f6e4da820c9a-steak-stroke-icon-by-vexels.png"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/homepage">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  id="pointer"
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/products">
                    All
                  </Link>
                  <div className="dropdown-divider" />
                  {categories.map(category => {
                    return (
                      <Link
                        className="dropdown-item"
                        to={`/categories/${category.id}`}
                        key={category.id}
                      >
                        {category.name}
                      </Link>
                    )
                  })}
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart{<sup>{cartNum}</sup>}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orderhistory">
                  Order History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/homepage" onClick={handleClick}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="container">
          <Link className="navbar-brand" to="/homepage">
            Butcher Bros
            {'    '}
            <img
              height="40px"
              width="40px"
              src="https://images.vexels.com/media/users/3/143248/isolated/preview/9a073ffe6b6bd3508dd0f6e4da820c9a-steak-stroke-icon-by-vexels.png"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/homepage">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  id="pointer"
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/products">
                    All
                  </Link>
                  <div className="dropdown-divider" />
                  {categories.map(category => {
                    return (
                      <Link
                        className="dropdown-item"
                        to={`/categories/${category.id}`}
                        key={category.id}
                      >
                        {category.name}
                      </Link>
                    )
                  })}
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart{<sup>{cartNum}</sup>}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart.contents,
    categories: state.product.allCategories
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  cart: PropTypes.array.isRequired
}
