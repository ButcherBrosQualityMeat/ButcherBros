import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const HomePage = props => {
  const {categories, products} = props

  return categories.length && products.length ? (
    <div>
      <header className="business-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1
                id="hero-text"
                className="display-3 text-center text-white mt-4"
              >
                Butcher Bros <br /> Meat & Butcher Shop
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <h2 id="qualityText" className="mt-3 text-center">
          Quality You Can Taste
        </h2>
        <div className="row">
          <div className="mt-3 col-sm-4 my-4">
            <div className="card">
              <img
                className="card-img-top"
                src={categories[0].imageUrl}
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Beef Products</h4>
                <p className="card-text">{categories[0].description}</p>
              </div>
              <div className="card-footer">
                <Link to="/categories/1" className="btn btn-dark">
                  Beef Products
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-3 col-sm-4 my-4">
            <div className="card">
              <img
                className="card-img-top"
                src={categories[1].imageUrl}
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Pork Products</h4>
                <p className="card-text">{categories[1].description}</p>
              </div>
              <div className="card-footer">
                <Link to="/categories/2" className="btn btn-dark">
                  Pork Products
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-3 col-sm-4 my-4">
            <div className="card">
              <img
                className="card-img-top"
                src={categories[2].imageUrl}
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Poultry Products</h4>
                <p className="card-text">{categories[2].description}</p>
              </div>
              <div className="card-footer">
                <Link to="/categories/3" className="btn btn-dark">
                  Poultry Products
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="text-center col-sm-4">
            <h2 className="mt-4">Contact Us</h2>
            <address>
              <strong>Start Bootstrap</strong>
              <br />3481 Melrose Place
              <br />Beverly Hills, CA 90210
              <br />
            </address>
            <address>
              <abbr title="Phone">P:</abbr>
              (123) 456-7890
              <br />
              <abbr title="Email">E:</abbr>
              <Link to="mailto:#">name@example.com</Link>
            </address>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>
      Loading ...{' '}
      <img
        src="https://images.vexels.com/media/users/3/143248/isolated/preview/9a073ffe6b6bd3508dd0f6e4da820c9a-steak-stroke-icon-by-vexels.png"
        height="80px"
        width="80px"
      />
    </h1>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.product.allCategories,
    products: state.product.allProducts
  }
}

export default connect(mapStateToProps)(HomePage)
