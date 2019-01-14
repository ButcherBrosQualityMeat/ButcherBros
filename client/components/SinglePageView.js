import React from 'react'
import {connect} from 'react-redux'
import {addItemToCart} from '../store/cart'

class SinglePageView extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    evt.preventDefault()
    const productId = evt.target.id
    const objectVariable = {productId: parseInt(productId, 10), quantity: 1}
    this.props.addItemToCart(objectVariable)
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
              <p className="card-text">${products[productIdNum].price / 100}</p>
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

const mapStateToProps = state => ({
  products: state.product.allProducts
})
const mapDispatchToProps = dispatch => ({
  addItemToCart: productObj => dispatch(addItemToCart(productObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePageView)
