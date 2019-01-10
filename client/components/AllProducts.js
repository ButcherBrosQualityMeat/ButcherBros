import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addItemToCart} from '../store/cart'

class AllProducts extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    evt.preventDefault()
    const productId = evt.target.id
    console.log(productId)
    this.props.addItemToCart({productId: parseInt(productId, 10), quantity: 1})
  }
  render() {
    if (this.props.info.length === 0) {
      return <div>Please standy, loading products...</div>
    }
    return (
      <div>
        <h1>List of Products:</h1>
        <div className="card-group">
          {this.props.info.allProducts.map(product => (
            <div key={product.id} className="card">
              <Link to={`/products/${product.id}`}>
                <img src={product.imageUrl} className="card-img-top" />
              </Link>
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <a
                href="#"
                className="btn btn-primary"
                id={product.id}
                onClick={this.handleClick}
              >
                Add to Cart
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  info: state.product
})

const mapDispatch = dispatch => ({
  addItemToCart: productObj => dispatch(addItemToCart(productObj))
})

export default connect(mapState, mapDispatch)(AllProducts)
