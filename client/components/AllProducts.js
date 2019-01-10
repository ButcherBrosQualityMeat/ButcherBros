import React from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/product'
import {Link} from 'react-router-dom'

class AllProducts extends React.Component {
  async componentDidMount() {}
  render() {
    console.log(this.props.products)
    if (this.props.products.length === 0) {
      return <div>Please standy, loading products...</div>
    }
    return (
      <div>
        <h1>List of Products:</h1>
        <div>
          {this.props.products.allProducts.map(product => (
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
  products: state.product
})

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
