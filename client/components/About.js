import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const About = props => {
  const {products} = props

  const productId = Number(props.match.params.id - 1)

  return products.length ? (
    <div className="container-fluid">
      <div className="col-sm-4 col-md-4.5 col-lg-5 my-4">
        <div className="card">
          <img
            className="card-img-top"
            src={products[productId].imageUrl}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{products[productId].name}</h5>
            <p className="card-text">{products[productId].description}</p>
            <Link
              to={`/addtocart/${products[productId].id}`}
              className="btn btn-primary"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.product.allProducts
  }
}

export default connect(mapStateToProps)(About)
