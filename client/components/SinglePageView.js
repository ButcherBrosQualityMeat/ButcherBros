import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const SinglePageView = props => {
  const {products} = props

  console.log(products, '<-----------')

  //console.log(products, "<-----------")

  return products.length ? (
    <div className="container-fluid">
      <div>{products[0].name}</div>
      <div className="card" width="18rem">
        <img
          className="card-img-top"
          src={products[0].imageUrl}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{products[0].name}</h5>
          <p className="card-text">{products[0].description}</p>
          <Link to={`/addtocart/${products[0].id}`} className="btn btn-primary">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  )
}

const mapState = (state, ownProps) => {
  console.log(state, '>>>>>>>>')
  return {
    products: state.product.allProducts
  }
}

export default connect(mapState)(SinglePageView)
