import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addItemToCart} from '../store/cart'

class SingleCategory extends React.Component {
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
    const categoryId = Number(this.props.match.params.id)
    if (this.props.info.length === 0) {
      return <div>Please standy, loading category...</div>
    }
    return (
      <div>
        <div>
          {this.props.info.allCategories.map(category => {
            if (category.id === categoryId) {
              return (
                <div
                  className="container-fluid col-sm-4 col-md-9"
                  key={category.id}
                >
                  <h3 className="mt-5"> {category.name}</h3>
                  <img src={category.imageUrl} width="500px" heigth="500px" />
                  <hr />
                  <p>{category.description}</p>
                  <h3 className="mt-5">
                    View our selection of {category.name} products:
                  </h3>
                  {category.products.map(product => {
                    return (
                      <div
                        className="h-70 col-sm-4 col-md-4 d-flex my-3"
                        key={product.id}
                      >
                        <div className="card" width="18rem">
                          <Link to={`/products/${product.id}`}>
                            <img
                              width="100%"
                              height="150vw"
                              src={product.imageUrl}
                              className="card-img-top"
                              alt="..."
                            />
                          </Link>
                          <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">${product.price}</p>
                            <a
                              id={product.id}
                              onClick={this.handleClick}
                              href="#"
                              className="btn btn-primary"
                            >
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  info: state.product
})

const mapDispatchToProps = dispatch => ({
  addItemToCart: productObj => dispatch(addItemToCart(productObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategory)
