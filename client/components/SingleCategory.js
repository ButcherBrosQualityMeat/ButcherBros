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
                <div>
                  <div key={category.id}>
                    <header className="categories-header">
                      <img src={category.imageUrl} width="100%" height="100%" />
                    </header>
                  </div>

                  <div
                    className="container-fluid col-sm-4 col-md-9"
                    key={category.id}
                  >
                    <h2 className="mt-5" id="cat-name">
                      {category.name}
                    </h2>

                    <hr />
                    <p>{category.description}</p>
                    <h3 className="mt-5">
                      View our selection of {category.name} products:
                    </h3>
                    <div className="mb-5 row d-flex justify-content-start" />
                    {category.products.map(product => {
                      return (
                        <div
                          className="h-70 col-sm-4 col-md-4 d-flex my-3"
                          key={product.id}
                        >
                          <div className="card" width="18rem">
                            <Link to={`/products/${product.id}`}>
                              <img
                                width="150vw"
                                height="220vw"
                                src={product.imageUrl}
                                className="card-img-top"
                                alt="..."
                              />
                            </Link>
                            <div className="card-body">
                              <h5 className="card-title">{product.name}</h5>
                              <p className="card-text">
                                ${product.price / 100}
                              </p>
                              <a
                                id={product.id}
                                onClick={this.handleClick}
                                href="#"
                                className="btn btn-dark"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
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
