import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import addItemToCart from '../store/cart'

class SinglePageView extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    evt.preventDefault()
    const productId = Number(evt.target.id)
    console.log(productId, 'ssdfgsdfgsdfgsdf')
    this.props.addItemToCart({productId, quantity: 1})
  }

  render() {
    const {products} = this.props
    const productIdNum = Number(this.props.match.params.id - 1)
    return products.length ? (
      <div className="container-fluid">
        <div className="col-sm-4 col-md-4.5 col-lg-5 my-4">
          <div className="card">
            <img
              className="card-img-top"
              src={products[productIdNum].imageUrl}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{products[productIdNum].name}</h5>
              <p className="card-text">{products[productIdNum].description}</p>
              <a
                href="#"
                className="btn btn-primary"
                id={products[productIdNum].id}
                onClick={this.handleClick}
              >
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>Loading</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, '>>>>>>>>')
  return {
    products: state.product.allProducts
  }
}
const mapDispatchToProps = dispatch => ({
  addItemToCart: productObj => dispatch(addItemToCart(productObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePageView)
