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
        <div className="mt-20 position-relative">
          <h2 id="qualityText" className="mt-3 text-center">
            Quality You Can Taste
          </h2>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            {categories.map((category, idx) => {
              if (idx === 1) {
                return (
                  <div className="carousel-item active" key={category.id}>
                    <img className="d-block w-100" src={category.imageUrl} />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className="carousel-item" key={category.id}>
                    <img className="d-block w-100" src={category.imageUrl} />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                    </div>
                  </div>
                )
              }
            })}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="text-center col-sm-4">
            <h2 className="mt-4">Contact Us</h2>
            <address>
              <strong>Butcher Bros</strong>
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
