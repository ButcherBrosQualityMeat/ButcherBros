import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class AllProducts extends React.Component {
  render() {
    if (this.props.info.length === 0) {
      return <div>Please standy, loading products...</div>
    }
    return (
      <div>
        <h1>List of Products:</h1>
        <div>
          {this.props.info.allProducts.map(product => (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <h1>{product.name}</h1>
                <img src={product.imageUrl} width="300px" heigth="300px" />
              </Link>
              <div>
                <p>{product.description}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  info: state.product
})

export default connect(mapStateToProps)(AllProducts)
