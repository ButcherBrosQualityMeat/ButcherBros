import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addItemToCart, updateSessionCart} from '../store/cart'

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
                <div key={category.id}>
                  <h1>{category.name}</h1>
                  <img src={category.imageUrl} width="600px" heigth="600px" />
                  <p>{category.description}</p>
                  <h1>View our selection of {category.name} products:</h1>
                  {category.products.map(product => {
                    return (
                      <div key={product.id}>
                        <Link to={`/products/${product.id}`}>
                          <h1>{product.name}</h1>
                          <img
                            src={product.imageUrl}
                            width="300px"
                            heigth="300px"
                          />
                        </Link>
                        <div>
                          <p>{product.description}</p>
                          <a
                            href="#"
                            className="btn btn-primary"
                            id={product.id}
                            onClick={this.handleClick}
                          >
                            Add to Cart
                          </a>
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
